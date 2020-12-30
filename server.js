const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; //heroku: 8080  localhost: 3001
const bodyParser = require('body-parser');
const passport = require("passport");
const mongoose = require('mongoose');

/* Routes go below this comment */

/* import secret keys */
require('dotenv/config');


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

/* CONNECT TO DB */
/* mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
     console.log('connected to db')
    }) */

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/* ROUTES will go below this comment */
app.get('/', (req, res) => {
    res.send('Home page on server')
    console.log('home')
})

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});