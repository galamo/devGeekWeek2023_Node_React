"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRequestId = void 0;
var addRequestId = function (req, res, next) {
    res.setHeader("x-request-id", Date.now());
    next();
};
exports.addRequestId = addRequestId;
