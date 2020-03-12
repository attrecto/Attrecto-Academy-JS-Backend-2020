const express = require('express');
const router = express.Router();

/* GET all users. */
router.get('/', function(req, res, next) {
  res.send('GET all users');
});

/* GET one user. */
router.get('/:id', function(req, res, next) {
  res.send('GET one user with id: ' + req.params.id);
});

/* CREATE user. */
router.post('/', function(req, res, next) {
  res.send('CREATE user');
});

/* MODIFY user. */
router.patch('/:id', function(req, res, next) {
  res.send('MODIFY user with id: ' + req.params.id);
});

/* DELETE user. */
router.delete('/:id', function(req, res, next) {
  res.send('DELETE user with id: ' + req.params.id);
});

module.exports = router;
