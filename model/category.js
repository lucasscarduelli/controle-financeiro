'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name : { type : String, required : true },
  color : { type : String, required : true},
  parent : { type: Schema.ObjectId, ref: 'category' },
  createdAt : { type : Date, required : true, default : new Date() },
  updatedAt : { type : Date, required : true, default : new Date() }
};

const categorySchema = new Schema(_schema);
const CategoryModel = mongoose.model('category', categorySchema, 'categories');

module.exports = CategoryModel;
