"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_sanitizer_1 = require("class-sanitizer");
const http_exception_1 = __importDefault(require("../exception/http-exception"));
function dtoValidationMiddleware(type, skipMissingProperties = false) {
    return (req, res, next) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            throw new http_exception_1.default(400, 'Request body is empty');
        }
        const dtoObj = (0, class_transformer_1.plainToClass)(type, req.body);
        (0, class_validator_1.validate)(dtoObj, { skipMissingProperties }).then((errors) => {
            if (errors.length > 0) {
                const dtoErrors = errors
                    .map((error) => Object.values(error.constraints || {}).join(', '))
                    .join(', ');
                next(new http_exception_1.default(400, dtoErrors));
            }
            else {
                // Sanitize the object and call the next middleware
                (0, class_sanitizer_1.sanitize)(dtoObj);
                req.body = dtoObj;
                next();
            }
        });
    };
}
exports.default = dtoValidationMiddleware;
//# sourceMappingURL=dto-validator.js.map