const {User} = require('../models/user');

const authenticate = (req, res, next) => {

    console.log(JSON.stringify(req.headers))

    var token = req.header('xAuth');
  
    User.findByToken(token)
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }
  
      req.user = user
      req.token = token
      next();
  
    }).catch((e) => {

      const resp = {
        status: {
          result: false,
          errorMessage: "Geçersiz kullanıcı TOKEN"
        },
        data: e
      };
      res.status(401).send(resp);
    });
  };

  module.exports = {authenticate};