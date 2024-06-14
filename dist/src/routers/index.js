"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_router_1 = __importDefault(require("./game.router"));
const user_router_1 = __importDefault(require("./user.router"));
const pulisher_router_1 = __importDefault(require("./pulisher.router"));
const auth_router_1 = __importDefault(require("./auth.router"));
const router = express_1.default.Router();
// Auth route.
router.use('/auth', auth_router_1.default);
// Game route.
router.use('/game', game_router_1.default);
// User route.
router.use('/user', user_router_1.default);
// Publisher route.
router.use('/publisher', pulisher_router_1.default);
// Home route.
router.get('/', function (req, res) {
    res.send('This is home');
});
exports.default = router;
//# sourceMappingURL=index.js.map