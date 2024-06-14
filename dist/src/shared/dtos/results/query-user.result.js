"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUserResult = void 0;
const class_transformer_1 = require("class-transformer");
const query_game_result_1 = require("./query-game.result");
const base_identity_result_1 = require("./base/base-identity.result");
let QueryUserResult = class QueryUserResult extends base_identity_result_1.BaseIdentityResult {
};
exports.QueryUserResult = QueryUserResult;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QueryUserResult.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QueryUserResult.prototype, "lastName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QueryUserResult.prototype, "userName", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], QueryUserResult.prototype, "password", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => query_game_result_1.QueryGameResult),
    __metadata("design:type", Array)
], QueryUserResult.prototype, "games", void 0);
exports.QueryUserResult = QueryUserResult = __decorate([
    (0, class_transformer_1.Expose)()
], QueryUserResult);
//# sourceMappingURL=query-user.result.js.map