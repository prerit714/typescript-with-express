"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
/**
 * Ping the server
 */
function ping(_req, res, _next) {
    res.status(200).json({
        body: "OK",
    });
}
exports.ping = ping;
