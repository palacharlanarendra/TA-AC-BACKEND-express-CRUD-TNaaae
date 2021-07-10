var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users', require('./routes/users'));
app.use((req, res, next) => {
  res.send('page not found');
});

app.listen(3000, () => {
  console.log('listening through the port 3k');
});
