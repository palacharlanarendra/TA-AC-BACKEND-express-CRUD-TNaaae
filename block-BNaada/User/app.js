var express = require('express');
var ejs = require('ejs');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/users',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log('Connected', err ? false : true);
  }
);

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//capture the form data
app.use(express.urlencoded({ extended: false }));
//setup handler middleware
app.use(express.static(path.join(__dirname, 'public')));
//routing middlewares

app.use('/users', require('./routes/users'));

//error hanlder middleware
//404
app.use((req, res, next) => {
  res.send('Page is not found');
});

//custom error handler
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server listening to the port 3000');
});
