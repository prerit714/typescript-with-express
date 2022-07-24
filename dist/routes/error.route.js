"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalServerErrorHandler = void 0;
async function internalServerErrorHandler(err, _req, res, _next) {
    res.status(err.statusCode).send({
        data: [],
        error: [err],
    });
}
exports.internalServerErrorHandler = internalServerErrorHandler;
