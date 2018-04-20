'use strict';

const Actions = {};
const TransactionModel = require('../model/transaction');
const callback = require('../utils/callback');

Actions.getAll = function(req, res) {
  let query = {};
  TransactionModel.find(query, (err, data) => {
      callback(err, data, res);
  });
};

Actions.getById = function(req, res) {
  let query = { _id : req.params.id };
  TransactionModel.findOne(query, (err, data) => {
      callback(err, data, res);
  });
};

Actions.create = function(req, res) {
  const body = req.body;
  delete body._id;
  const transaction = new TransactionModel(body);
  transaction.save((err, data) => {
      callback(err, data, res);
  });
};

Actions.update = function(req, res) {
  const query = { _id : req.params.id };
  const body = req.body;

  TransactionModel.update(query, body, (err, data) => {
      if (data.ok) {
          TransactionModel.findOne(query, (err, updatedData) => {
              callback(err, updatedData, res);
          });
      } else {
        callback(err, data, res);
      }
  });
};

module.exports = Actions;
