"use strict";

// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise

var AppRouter = require('./app.js')

window.addEventListener('load', app)

function app() {
    new AppRouter()
}

