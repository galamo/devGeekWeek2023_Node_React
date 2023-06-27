"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByTitle = void 0;
function searchByTitle(data, title) {
    var _a;
    return (_a = data === null || data === void 0 ? void 0 : data.products) === null || _a === void 0 ? void 0 : _a.filter(function (p) { return p.title.toLowerCase().includes(title.toLowerCase()); });
}
exports.searchByTitle = searchByTitle;
