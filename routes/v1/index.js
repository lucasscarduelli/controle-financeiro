'use strict'

const routerAccount = require('./account')
const routerCategory = require('./category')
const routerCreditCard = require('./creditCard')
const routerTransaction = require('./transaction')

module.exports.account = routerAccount
module.exports.category = routerCategory
module.exports.creditCard = routerCreditCard
module.exports.transaction = routerTransaction
