require('./config/config')
const {authenticate} = require('./middleware/authenticate');

const moment = require('moment')
const cors = require('cors')
const path = require('path')
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')
const _ = require('lodash')

const {mongoose} = require('./db/mongoose')
const {Student} = require('./models/student')
var {User} = require('./models/user')

const port = process.env.PORT

const app = express()

const publicPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicPath))

app.use(bodyParser.json())
// app.use(cors({
//   exposedHeaders: ['Xauth']
// }))

app.post('/api/users/login', (req, res) => {

  const body = _.pick(req.body, ['email','password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuth().then((token) => {
      res.header('xAuth', token).send({
        status: {
          result: true,
          errorMessage: null
        },
        data: [user]
      });
    });
  }).catch((e) => {

    res.status(400).send({
      status: {
        result: false,
        errorMessage: "Kullanıcı adı veya şifre hatalı"
      },
      data: null
    });
  });
});

app.post('/api/users/logout', authenticate, (req, res) => {

  req.user.removeToken(req.token)
  .then((obj) => {
    console.log(obj)
    res.sendStatus(200)
  })
})

app.get('/api/users/me', authenticate, (req, res) => {

  res.header('xAuth', req.token).send({
    status: {
      result: true,
      errorMessage: null
    },
    data: [req.user]
  });
})

app.post('/api/users', (req, res) => {

  var body = _.pick(req.body, ['email', 'name', 'password']);
  console.log(body)
  var user = new User(body);

  user.save()
  .then(() => {
    return user.generateAuth();
  })
  .then((obj) => {

    res.header('X-Auth', obj.token).send({
      status: {
        result: true,
        errorMessage: null
      },
      data: [user]
    });
  })
  .catch((e) => {
    
    console.log(e)
    res.sendStatus(401)
  });
});

app.post('/api/student', (req, res) => {

  const body = _.pick(req.body, ['firstName', 'lastName', 'classroom'])

  const obj = new Student(body)
  obj.save()
  .then((newDoc) => {

    const resp = {
      status: {
        result: true,
        errorMessage: null
      },
      data: [newDoc]
    }
    res.send(resp)
  })
  .catch((e) => {

    const resp = {
      status: {
        result: false,
        errorMessage: e.message
      },
      data: []
    }
    res.status(400).send(resp)
  })
})

app.patch('/api/student/:id', async (req, res) => {

  const body = _.pick(req.body, ['firstName', 'lastName', 'classroom', '_id'])

  const updObj = await Student.findOneAndUpdate(
    {_id: req.params.id},
    body,
    {new:true})

  const resp = {
    status: {
      result: true,
      errorMessage: null
    },
    data: [updObj]
  }
  res.send(resp)
})

app.get('/api/student', (req, res) => {

  Student.find({})
  .then((docs) => {

    if (docs && docs.length > 0) {
      const resp = {
        status: {
          result: true,
          errorMessage: null
        },
        list: docs
      }
      res.send(resp)
    } else {
      return Promise.reject({message: 'Öğrenci bulunamadı', code: 404})
    }
  })
  .catch((e) => {
    console.log(e)
    const resp = {
      status: {
        result: false,
        errorMessage: e.message
      },
      data: []
    }
    res.status(e.code || 400).send(resp)
  })
})

app.delete('/api/student/:id', async (req, res) => {

  await Student.findOneAndRemove({_id: req.params.id})
  res.sendStatus(201)

})

app.get('/api/*', (req, res) => {
  const indexPath = path.join(publicPath, 'noapi.html')
  res.sendFile(indexPath)
})

app.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log(`Started on port azure ${port}`)
})

module.exports = {app}
