'use strict';

const router = require('express').Router();
const Actions = require('../../actions/account');

const Routes = [
    { method : 'get', path : '/', action : Actions.getAll }
];

const Router = require('./routesExpress')(Routes, router);

module.exports = router;
