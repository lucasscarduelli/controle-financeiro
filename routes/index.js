var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  // Aqui deve conter a documentação completa da API
  res.json({ ok: true })
})

module.exports = router
