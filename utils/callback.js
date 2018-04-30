'use strict'

module.exports = (err, data, res) => {
  if (err) return res.json(err)
  return res.json(data)
}
