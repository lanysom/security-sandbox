var express = require('express');
var router = express.Router();

/* POST terminates the user session */
router.post('/', function(req, res) {

  res.sendStatus(501);  // TODO: Not implemented!
});

module.exports = router;