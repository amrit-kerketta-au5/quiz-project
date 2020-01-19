const express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require("body-parser");

var session = require("express-session");

var app = express()
app.engine('hbs', hbs({ defaultLayout: false, extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(session({
    secret: "qwertyuiopasdfghjkl",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 600,
        path: "/",
        httpOnly: true,
    }
}))

app.use(express.static('public'))
app.use('/', require('./routes/index'))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
//app.listen(4500, console.log('Server Started'))