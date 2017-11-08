"use strict";

var express = require("express");

var app = express();

var name = "Paul";

app.get("/", function (req, res) {
    res.send("<h1>This is the root route! Check...Again...Nice...</h1>");
});

app.get("/hello", function (req, res) {
    res.send("<p>Hello " + name + ". You are an awesome developer " + name + "!!!</p>");
});

var dt = Date();
console.log("   " + dt);

app.listen(3000, function () {
    console.log("Changes have been reloaded - " + dt);
});