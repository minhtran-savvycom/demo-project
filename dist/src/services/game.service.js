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
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../setting/configuration");
const game_entity_1 = require("../shared/entities/game.entity");
class GameService {
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new GameService();
        }
        return this._instance;
    }
    createGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const game = configuration_1.dataSource.getRepository(game_entity_1.Game).create(req.body);
                const result = yield configuration_1.dataSource.getRepository(game_entity_1.Game).save(game);
                res.status(201).json(result);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ error: 'An error occurred while creating the game' });
            }
        });
    }
    deleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield configuration_1.dataSource.getRepository(game_entity_1.Game).delete(req.params.id);
                if (result.affected === 0) {
                    return res.status(404).json({ error: 'Game not found' });
                }
                res.json({ message: 'Game deleted successfully' });
            }
            catch (error) {
                res
                    .status(500)
                    .json({ error: 'An error occurred while deleting the game' });
            }
        });
    }
    updateGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const game = yield configuration_1.dataSource
                    .getRepository(game_entity_1.Game)
                    .findOneBy({ id: req.params.id.toString() });
                if (!game) {
                    return res.status(404).json({ error: 'Game not found' });
                }
                configuration_1.dataSource.getRepository(game_entity_1.Game).merge(game, req.body);
                const result = yield configuration_1.dataSource.getRepository(game_entity_1.Game).save(game);
                res.json(result);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ error: 'An error occurred while updating the game' });
            }
        });
    }
    getGameById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const game = yield configuration_1.dataSource
                    .getRepository(game_entity_1.Game)
                    .findOneBy({ id: req.params.id.toString() });
                if (!game) {
                    return res.status(404).json({ error: 'Game not found' });
                }
                res.json(game);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ error: 'An error occurred while fetching the game' });
            }
        });
    }
    findAllGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const games = yield configuration_1.dataSource.getRepository(game_entity_1.Game).find();
                res.json(games);
            }
            catch (error) {
                res.status(500).json({ error: 'An error occurred while fetching games' });
            }
        });
    }
}
exports.default = GameService.getInstance();
//# sourceMappingURL=game.service.js.map