'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _schema = {
  type: { type: String, required: true, enum: [ 'CHECKING', 'SAVING' ] },
  name: { type: String, required: true },
  description: { type: String, required: true },
  bank: {
    name: { type: String, required: true }
  },
  agency: {
    number: { type: Number, required: true },
    checkNumber: { type: Number, required: true }
  },
  number: { type: Number, required: true },
  checkNumber: { type: Number, required: true },
  amount: {
    current: { type: Number, required: true, default: 0 },
    future: { type: Number, required: true, default: 0 }
  },
  dateOpened: { type: Date, required: true, default: new Date() },
  dateClosed: { type: Date },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() }
}

const accountSchema = new Schema(_schema)
const AccountModel = mongoose.model('account', accountSchema)

module.exports = AccountModel

// https://github.com/organizze/api-doc
// https://dev.moip.com.br/v2/
