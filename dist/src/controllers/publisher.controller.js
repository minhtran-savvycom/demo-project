"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const publisherController = express_1.default.Router();
// Home page route.
publisherController.get('/', function (req, res) {
    res.send('Wiki home page');
});
// About page route.
publisherController.get('/about', function (req, res) {
    res.send('About this wiki');
});
exports.default = publisherController;
//# sourceMappingURL=publisher.controller.js.map