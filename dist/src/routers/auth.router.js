"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const dto_validator_1 = __importDefault(require("../middlewares/dto-validator"));
const auth_model_1 = require("../shared/dtos/models/auth.model");
const authRouter = express_1.default.Router();
authRouter.post('/login', (0, dto_validator_1.default)(auth_model_1.AuthModel), function (req, res, next) {
    auth_controller_1.default.login(req, res, next);
});
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map