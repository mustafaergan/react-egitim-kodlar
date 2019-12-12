const mongoose = require('mongoose')
const _ = require('lodash')

var StudentSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  classroom: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { usePushEach: true })

StudentSchema.methods.toJSON = function () {
  var o = this
  var oObject = o.toObject()

  return _.pick(oObject, ['_id', 'firstName', 'lastName', 'classroom', 'dateOfBirth', 'createdAt'])
}

var Student = mongoose.model('Student', StudentSchema)

module.exports = {Student}