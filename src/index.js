#!/usr/bin/env node
"use strict";
var express = require("express");
var path = require("path");

var bodyParser = require('body-parser');

//routes
var index = require(__dirname + '/routes/index');
var about = require(__dirname + '/routes/about');
var report = require(__dirname + '/routes/report');
var users = require(__dirname + '/routes/users');
//var mongodb = require(__dirname + '/routes/mongodb');
var read = require(__dirname + '/mongodb/api/read');
var add = require(__dirname + '/mongodb/api/add');
var remove = require(__dirname + '/mongodb/api/remove');
var update = require(__dirname + '/mongodb/api/update');

var landingpage = require(__dirname + '/routes/client-server-app');
var chat = require(__dirname + '/routes/chat');

var app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// Serve static files
// var staticFiles = path.join(__dirname, "public");
var staticFiles = path.join(__dirname, "../react-frontend/build");

app.use(express.static(staticFiles));

// This is middleware called for all routes
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true})); // support encoded bodies
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});
// turn off minimized html for pug
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

// ROUTES
// Catch all, send react app via index.html if no previous match
app.get("/", (req, res, next) => {
    // Path to index.html in client build directory
    res.sendFile(path.join(__dirname + '/../react-frontend/build/index.html'));
});

app.use('/', index);
app.use('/about', about);
app.use('/report', report);
app.use('/users', users);
app.use('/client-server-app', landingpage);
app.use('/chat', chat);
//app.use('/mongodb', mongodb);

// api routes
app.use('/api/read', read);
app.use('/api/add/', add);
app.use('/api/remove', remove);
app.use('/api/update', update);


// Catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");

    err.status = 404;
    next(err);
});



app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    err.status = err.status || 500;
    res.status(err.status);
    res.render("error", {
        error: err
    });
});

module.exports = app;
