"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
router.get("/", function (req, res, next) {
    for (var index = 0; index < 9999999999; index++) {
    }
    res.send("Users..!");
});
exports.default = router;
