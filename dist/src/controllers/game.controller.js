"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_service_1 = __importDefault(require("../services/game.service"));
class GameController {
    constructor() { }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new GameController();
        return this._instance;
    }
    createGame(req, res) {
        game_service_1.default.createGame(req, res);
    }
    deleteGame(req, res) {
        game_service_1.default.deleteGame(req, res);
    }
    updateGame(req, res) {
        game_service_1.default.updateGame(req, res);
    }
    findAllGames(req, res) {
        game_service_1.default.findAllGames(req, res);
    }
    getGameById(req, res) {
        game_service_1.default.getGameById(req, res);
    }
}
exports.default = GameController.getInstance();
//# sourceMappingURL=game.controller.js.map