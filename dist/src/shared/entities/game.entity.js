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
exports.Game = void 0;
const typeorm_1 = require("typeorm");
const base_identity_entity_1 = require("./base/base-identity.entity");
const publisher_entity_1 = require("./publisher.entity");
const user_entity_1 = require("./user.entity");
let Game = class Game extends base_identity_entity_1.BaseIdentityEntity {
};
exports.Game = Game;
__decorate([
    (0, typeorm_1.Column)('varchar', {
        nullable: false,
    }),
    __metadata("design:type", String)
], Game.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Game.prototype, "yearRelease", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publisher_entity_1.Publisher, (p) => p.games),
    (0, typeorm_1.JoinColumn)({
        foreignKeyConstraintName: 'Game_Pulisher',
    }),
    __metadata("design:type", publisher_entity_1.Publisher)
], Game.prototype, "publisher", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (u) => u.games),
    __metadata("design:type", Array)
], Game.prototype, "users", void 0);
exports.Game = Game = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['name'])
], Game);
//# sourceMappingURL=game.entity.js.map