"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const dto_validator_1 = __importDefault(require("../middlewares/dto-validator"));
const create_user_model_1 = require("../shared/dtos/models/create-user.model");
const update_user_model_1 = require("../shared/dtos/models/update-user.model");
const passport_1 = __importDefault(require("passport"));
const userRouter = express_1.default.Router();
userRouter.get('/:id', function (req, res) {
    user_controller_1.default.getUserById(req, res);
});
userRouter.get('/', function (req, res) {
    user_controller_1.default.findAllUser(req, res);
});
userRouter.post('/', (0, dto_validator_1.default)(create_user_model_1.CreateUserModel), function (req, res) {
    user_controller_1.default.createUser(req, res);
});
userRouter.put('/', (0, dto_validator_1.default)(update_user_model_1.UpdateUserModel), passport_1.default.authenticate('jwt', { session: false }), function (req, res) {
    user_controller_1.default.updateUser(req, res);
});
userRouter.delete('/:id', passport_1.default.authenticate('jwt', { session: false }), function (req, res) {
    user_controller_1.default.deleteUser(req, res);
});
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map