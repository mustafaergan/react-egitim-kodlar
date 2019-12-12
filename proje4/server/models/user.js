const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const _ = require('lodash')

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    minlength: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  },
  updatedAt: {
    type: Date,
    default: new Date().toISOString()
  }
}, { 
  usePushEach: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

UserSchema.methods.toJSON = function () {
  var o = this
  var oObject = o.toObject()

  return _.pick(oObject, ['_id', 'email', 'name'])
}

UserSchema.methods.generateAuth = function () {
  var user = this
  var access = 'auth'
  var token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString()

  user.tokens.push({access, token})

  return user.save()
  .then(() => {
    return token
  })
  .catch((e) => {
    console.log('save', e)
  })
}

UserSchema.methods.removeToken = function (token) {
  var user = this

  return user.updateOne({
    $pull: {
      tokens: {token}
    }
  })

}

UserSchema.statics.findByToken = function (token) {
  var User = this
  var decoded

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch (e) {
    console.log('find by token', e)
    return Promise.reject()
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
}

UserSchema.statics.findByCredentials = function (email, password) {

  var User = this

  // console.log("find", email)

  return User.findOne({email})
  .then((user) => {
    if (!user) {
      return Promise.reject()
    }

    return new Promise((resolve, reject) => {

      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user)
        }

        else {
          reject()
        }
      })
    })
  })
  .catch((e) => {
    console.log('--- findbycred', e)
  })
}

UserSchema.pre('save', function (next) {

  var user = this

  if (user.isNew) {
    user.createdAt = new Date().toISOString()
    user.updatedAt = user.createdAt
  }

  else {
    user.updatedAt = new Date().toISOString()
  }

  if (user.isModified('password')) {

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash
            next()
        })
    })
  } else {
    next()
  }
})

var User = mongoose.model('User', UserSchema)

module.exports = {User}