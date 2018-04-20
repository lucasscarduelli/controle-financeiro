'use strict'

const Actions = {}
const AccountModel = require('../model/account')
const callback = require('../utils/callback')

Actions.getAll = (req, res) => {
  let query = {}
  AccountModel.find(query, (err, data) => {
    callback(err, data, res)
  })
}

Actions.getById = (req, res) => {
  let query = { _id: req.params.id }
  AccountModel.findOne(query, (err, data) => {
    callback(err, data, res)
  })
}

Actions.create = (req, res) => {
  const body = req.body
  delete body._id
  const account = new AccountModel(body)
  account.save((err, data) => {
    callback(err, data, res)
  })
}

Actions.update = (req, res) => {
  const query = { _id: req.params.id }
  const body = req.body

  AccountModel.update(query, body, (err, data) => {
    if (data.ok) {
      AccountModel.findOne(query, (err, updatedData) => {
        callback(err, updatedData, res)
      })
    } else {
      callback(err, data, res)
    }
  })
}

module.exports = Actions
