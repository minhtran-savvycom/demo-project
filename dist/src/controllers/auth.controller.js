"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../services/auth.service"));
class AuthController {
    constructor() { }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new AuthController();
        return this._instance;
    }
    login(req, res, next) {
        auth_service_1.default.login(req, res, next);
    }
}
exports.default = AuthController.getInstance();
//# sourceMappingURL=auth.controller.js.map