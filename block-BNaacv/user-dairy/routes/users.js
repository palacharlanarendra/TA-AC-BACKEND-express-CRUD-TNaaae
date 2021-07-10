var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
  res.render('userForm.ejs', { name: 'narendra' });
});
router.get('/', (req, res) => {
  res.render('users', { name: 'narendra', name2: 'bharath' });
});
router.get('/:id', (req, res) => {
  //get the specific user details
  res.render('singleUser.ejs', { name: 'narendra' });
});

router.delete('/:id', (req, res) => {
  //delete the specific user
});
router.put('/:id', (req, res) => {
  //update the specific
});

module.exports = router;
