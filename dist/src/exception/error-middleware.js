"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(error, req, res, next) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    console.error(`[Error] Status: ${status}, Message: ${message}`);
    res.status(status).json({ status, message });
}
exports.default = errorMiddleware;
//# sourceMappingURL=error-middleware.js.map