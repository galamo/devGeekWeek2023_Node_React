"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var auth = function (req, res, next) {
    var _a = req.query, apiKey = _a.apiKey, apikey = _a.apikey;
    console.log(req.query);
    if (apiKey === process.env.ApiKey) {
        next();
    }
    else {
        console.log("Token is invalid", res.getHeader("x-request-id"));
        res.status(401).send("User is not authorized!");
    }
};
exports.auth = auth;
