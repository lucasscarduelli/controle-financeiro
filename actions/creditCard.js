'use strict';

const Actions = {};
const CreditCardModel = require('../model/creditCard');
const callback = require('../utils/callback');

Actions.getAll = function(req, res) {
  let query = {};
  CreditCardModel.find(query, (err, data) => {
      callback(err, data, res);
  });
};

Actions.getById = function(req, res) {
  let query = { _id : req.params.id };
  CreditCardModel.findOne(query, (err, data) => {
      callback(err, data, res);
  });
};

Actions.create = function(req, res) {
  const body = req.body;
  delete body._id;
  const creditCard = new CreditCardModel(body);
  creditCard.save((err, data) => {
      callback(err, data, res);
  });
}

module.exports = Actions;
