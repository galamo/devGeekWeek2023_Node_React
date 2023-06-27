"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var products_1 = require("./products");
var users_1 = require("./users");
var cors_1 = require("cors");
var middleware_1 = require("./middleware");
dotenv_1.default.config();
// const express = require("express")
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(middleware_1.requestStarted);
app.use(middleware_1.addRequestId);
app.get("/health-check", function (req, res, next) {
    res.send("Api is running!");
});
app.use(middleware_1.auth);
app.use("/products", products_1.default);
app.use("/users", users_1.default);
app.use(function (error, req, res, next) {
    res.status(500).send("Something went wrong!");
});
app.listen(process.env.PORT, function () {
    console.log("Api is running on ".concat(process.env.PORT));
});
