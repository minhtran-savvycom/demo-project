"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() { }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new UserController();
        return this._instance;
    }
    createUser(req, res) {
        user_service_1.default.createUser(req, res);
    }
    deleteUser(req, res) {
        user_service_1.default.deleteUser(req, res);
    }
    updateUser(req, res) {
        user_service_1.default.updateUser(req, res);
    }
    findAllUser(req, res) {
        user_service_1.default.findAllUser(req, res);
    }
    getUserById(req, res) {
        user_service_1.default.getUserById(req, res);
    }
}
exports.default = UserController.getInstance();
//# sourceMappingURL=user.controller.js.map