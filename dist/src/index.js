"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const cors_1 = __importDefault(require("cors")); // Import CORS
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const index_1 = __importDefault(require("./routers/index"));
const configuration_1 = require("./setting/configuration");
const swagger_1 = __importDefault(require("./setting/swagger"));
const passport_1 = __importDefault(require("./authentication/passport"));
const error_middleware_1 = __importDefault(require("./exception/error-middleware"));
dotenv_1.default.config();
configuration_1.dataSource
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
const specs = (0, swagger_jsdoc_1.default)(swagger_1.default);
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(passport_1.default.initialize());
app.use('/api', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, { explorer: true }));
app.use('/', index_1.default);
app.use(error_middleware_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map