"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dto_validator_1 = __importDefault(require("../middlewares/dto-validator"));
const game_controller_1 = __importDefault(require("../controllers/game.controller"));
const create_game_model_1 = require("../shared/dtos/models/create-game.model");
const update_game_model_1 = require("../shared/dtos/models/update-game.model");
const gameRouter = express_1.default.Router();
gameRouter.get('/:id', function (req, res) {
    game_controller_1.default.getGameById(req, res);
});
gameRouter.get('/', function (req, res) {
    game_controller_1.default.findAllGames(req, res);
});
gameRouter.post('/', (0, dto_validator_1.default)(create_game_model_1.CreateGameModel), function (req, res) {
    game_controller_1.default.createGame(req, res);
});
gameRouter.put('/:id', (0, dto_validator_1.default)(update_game_model_1.UpdateGameModel), function (req, res) {
    game_controller_1.default.updateGame(req, res);
});
gameRouter.delete('/:id', function (req, res) {
    game_controller_1.default.deleteGame(req, res);
});
exports.default = gameRouter;
//# sourceMappingURL=game.router.js.map