'use strict';

const router = require('express').Router();
const Actions = require('../../actions/creditCard');

const Routes = [
    { method : 'get'  , path : '/'    , action : Actions.getAll },
    { method : 'get'  , path : '/:id' , action : Actions.getById },
    { method : 'post' , path : '/'    , action : Actions.create },
    { method : 'put'  , path : '/:id' , action : Actions.update }
];

const Router = require('./routesExpress')(Routes, router);

module.exports = router;
