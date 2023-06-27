"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTitle = void 0;
var zod_1 = require("zod");
var titleSchema = zod_1.default.object({
    title: zod_1.default.string().max(20).min(3)
});
function validateTitle(req, res, next) {
    try {
        titleSchema.parse(req.params);
        return next();
    }
    catch (error) {
        console.log(error);
        // return next(error) // call error middleware explicitly 
        return res.status(400).send("something went wrong");
    }
}
exports.validateTitle = validateTitle;
