"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../setting/configuration");
const user_entity_1 = require("../shared/entities/user.entity");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthService {
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new AuthService();
        }
        return this._instance;
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if user exists
                const userExists = yield configuration_1.dataSource
                    .getRepository(user_entity_1.User)
                    .findOneBy({ email: req.body.email });
                if (!userExists) {
                    return res.status(400).json({ message: 'User does not exist' });
                }
                // Check if password is correct
                const isPasswordValid = yield bcrypt_1.default.compare(req.body.password, userExists.password);
                if (!isPasswordValid) {
                    return res.status(400).json({ message: 'Incorrect password' });
                }
                // Generate access token
                const accessToken = jsonwebtoken_1.default.sign({
                    id: userExists.id,
                }, 'secret', { expiresIn: '1d' });
                return res.status(200).json({ message: 'User logged in', accessToken });
            }
            catch (error) {
                console.log(error);
                next(error);
            }
        });
    }
}
exports.default = AuthService.getInstance();
//# sourceMappingURL=auth.service.js.map