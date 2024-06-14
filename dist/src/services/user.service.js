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
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const class_transformer_1 = require("class-transformer");
const query_user_result_1 = require("../shared/dtos/results/query-user.result");
const game_entity_1 = require("../shared/entities/game.entity");
dotenv_1.default.config();
class UserService {
    constructor() { }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new UserService();
        return this._instance;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the email already exists
                const existingUser = yield configuration_1.dataSource.getRepository(user_entity_1.User).findOneBy({
                    email: req.body.email,
                });
                if (existingUser) {
                    return res.status(400).json({ error: 'Email is already in use' });
                }
                const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
                const user = configuration_1.dataSource.getRepository(user_entity_1.User).create(Object.assign(Object.assign({}, req.body), { password: hashedPassword }));
                const result = yield configuration_1.dataSource.getRepository(user_entity_1.User).save(user);
                const dto = (0, class_transformer_1.plainToClass)(query_user_result_1.QueryUserResult, result, {
                    excludeExtraneousValues: true,
                });
                res.status(201).json(dto);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ error: 'An error occurred while creating the user' });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield configuration_1.dataSource.getRepository(user_entity_1.User).delete(req.params.id);
                if (result.affected === 0) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json({ message: 'User deleted successfully' });
            }
            catch (error) {
                res
                    .status(500)
                    .json({ error: 'An error occurred while deleting the user' });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const user = yield configuration_1.dataSource
                    .getRepository(user_entity_1.User)
                    .findOneBy({ id: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id.toString() });
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                if ((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.password) {
                    const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
                    req.body.password = hashedPassword;
                }
                if (((_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.gameNames) && Array.isArray(req.body.gameNames)) {
                    const gameNames = req.body.gameNames;
                    const games = yield configuration_1.dataSource.getRepository(game_entity_1.Game).find({
                        where: gameNames.map((name) => ({ name })),
                    });
                    if (!games || games.length !== gameNames.length) {
                        return res.status(400).json({ error: 'One or more games not found' });
                    }
                    req.body.games = games; // Associate the games with the user
                }
                const result = yield configuration_1.dataSource
                    .getRepository(user_entity_1.User)
                    .save(configuration_1.dataSource.getRepository(user_entity_1.User).merge(user, req.body));
                const dto = (0, class_transformer_1.plainToClass)(query_user_result_1.QueryUserResult, result, {
                    excludeExtraneousValues: true,
                });
                res.status(201).json(dto);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield configuration_1.dataSource
                    .getRepository(user_entity_1.User)
                    .findOneBy({ id: req.params.id.toString() });
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                const dto = (0, class_transformer_1.plainToClass)(query_user_result_1.QueryUserResult, user, {
                    excludeExtraneousValues: true,
                });
                res.status(201).json(dto);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ error: 'An error occurred while fetching the user' });
            }
        });
    }
    findAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield configuration_1.dataSource.getRepository(user_entity_1.User).find();
                const dto = (0, class_transformer_1.plainToClass)(query_user_result_1.QueryUserResult, users, {
                    excludeExtraneousValues: true,
                });
                res.json(dto);
            }
            catch (error) {
                res.status(500).json({ error: 'An error occurred while fetching users' });
            }
        });
    }
}
exports.default = UserService.getInstance();
//# sourceMappingURL=user.service.js.map