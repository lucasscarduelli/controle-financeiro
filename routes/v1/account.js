'use strict';

const router = require('express').Router();
const Actions = require('../../actions/account');

const Routes = [
    { method : 'get'  , path : '/'    , action : Actions.getAll },
    { method : 'get'  , path : '/:id' , action : Actions.getById },
    { method : 'post' , path : '/'    , action : Actions.create }
];

const Router = require('./routesExpress')(Routes, router);

module.exports = router;
