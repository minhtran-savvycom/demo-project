"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/exception/HttpException.ts
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.default = HttpException;
//# sourceMappingURL=http-exception.js.map