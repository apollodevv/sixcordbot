const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.set('views', 'dashboard/views');
app.set('view engine', 'ejs');
app.use('assets', express.static('assets'));

// routes
const home = require('./routes/index');
app.use('/', home);

// middlewares
app.use(function(req, res, next) {
    return res.status(404).render("errors/404");
  });
  
app.listen(4000, function (err) {
    if (err) return console.log(err)
    console.log('Running status website!')
})
