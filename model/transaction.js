'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {

  type : { type : String, required : true, enum : [ 'CREDIT', 'DEBIT' ]},
  status : { type : String, required : true, enum : [ 'OPEN', 'PAID', 'LATE' ]},
  name : { type : String, required : true },
  description : { type : String, required : true},
  dateDue : { type : Date, required : true },
  datePaid : { type : Date },
  amount : { type : Number, required : true, default : 0 },
  paymentAmount : { type : Number, required : true, default : 0 },
  category : { type: Schema.ObjectId, ref: 'category' },
  installment : {
    total : { type : Number, required : true, default : 1 },
    number : { type : Number, required : true, default : 1 },
    originalTransaction : { type: Schema.ObjectId, ref: 'transaction' }
  },
  account : { type: Schema.ObjectId, ref: 'account' },
  creditCard : { type: Schema.ObjectId, ref: 'creditCard' },
  creditCardInvoice : { type: Schema.ObjectId, ref: 'creditCard.invoices' },
  createdAt : { type : Date, required : true, default : new Date() },
  updatedAt : { type : Date, required : true, default : new Date() },

};

const transactionSchema = new Schema(_schema);
const TransactionModel = mongoose.model('transaction', transactionSchema);

module.exports = TransactionModel;
