"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestStarted = void 0;
var requestStarted = function (req, res, next) {
    console.log("".concat(new Date().toISOString(), ": => Request Started ").concat(req.path));
    next();
};
exports.requestStarted = requestStarted;
