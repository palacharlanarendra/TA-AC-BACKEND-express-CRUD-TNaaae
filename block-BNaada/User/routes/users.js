var express = require('express');

var router = express.Router();
var User = require('../models/userSchema');

router.get('/', (req, res) => {
  //fetch list of users from database
  User.find({}, (err, users) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users', { users: users });
  });
});
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.render('singleUser', { user: user });
  });
});
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