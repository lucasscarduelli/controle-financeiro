'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _schema = {
  type: { type: String, required: true, enum: [ 'CREDIT', 'DEBIT' ] },
  flag: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  limit: { type: Number, required: true, default: 0 },
  dueDay: { type: Number, required: true },
  closingDay: { type: Number, required: true },
  monthExpiration: { type: Number, required: true },
  yearExpiration: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },

  invoices: [{
    status: { type: String, required: true, enum: [ 'OPEN', 'PAID', 'LATE' ] },
    dateDue: { type: Date, required: true },
    dateOpening: { type: Date, required: true },
    dateClosing: { type: Date, required: true },
    amount: { type: Number, required: true, default: 0 },
    paymentAmount: { type: Number, required: true, default: 0 },
    previousBalance: { type: Number, required: true, default: 0 },
    balance: { type: Number, required: true, default: 0 },
    transactions: [{ type: Schema.ObjectId, ref: 'transaction' }]
  }]
}

const creditCardSchema = new Schema(_schema)
const creditCardModel = mongoose.model('creditCard', creditCardSchema)

module.exports = creditCardModel
