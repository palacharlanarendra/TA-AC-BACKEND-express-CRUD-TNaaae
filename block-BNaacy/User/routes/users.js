var express = require('express');

var router = express.Router();
var User = require('../models/userSchema');
router.get('/', (req, res) => {
  res.render('users.ejs');
});
router.get('/new', (req, res) => {
  res.render('usersform.ejs');
});
router.post('/', (req, res) => {
  // console.log(req.body);
  User.create(req.body, (err, createdUser) => {
    console.log(err, createdUser);
    if (err) res.redirect('/new');
    res.redirect('/users');
  });
});
module.exports = router;
