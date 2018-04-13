'use strict';

const Actions = {};
const CategoryModel = require('../model/category');
const callback = require('../utils/callback');

Actions.getAll = function(req, res) {
  let query = {};
  CategoryModel.find(query, (err, data) => {
      callback(err, data, res);
  });
};

Actions.getById = function(req, res) {
  let query = { _id : req.params.id };
  CategoryModel.findOne(query, (err, data) => {
      callback(err, data, res);
  });
};

Actions.create = function(req, res) {
  const body = req.body;
  delete body._id;
  const category = new CategoryModel(body);
  category.save((err, data) => {
      callback(err, data, res);
  });
}

module.exports = Actions;
