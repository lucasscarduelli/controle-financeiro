'use strict';

module.exports = function(err, data, res) {
    if (err) return res.json(err);
    return res.json(data);
};
