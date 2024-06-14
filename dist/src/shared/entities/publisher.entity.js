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
exports.Publisher = void 0;
const typeorm_1 = require("typeorm");
const base_identity_entity_1 = require("./base/base-identity.entity");
const game_entity_1 = require("./game.entity");
let Publisher = class Publisher extends base_identity_entity_1.BaseIdentityEntity {
};
exports.Publisher = Publisher;
__decorate([
    (0, typeorm_1.Column)('varchar', {
        nullable: false,
    }),
    __metadata("design:type", String)
], Publisher.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        nullable: true,
    }),
    __metadata("design:type", String)
], Publisher.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => game_entity_1.Game, (g) => g.publisher),
    __metadata("design:type", Array)
], Publisher.prototype, "games", void 0);
exports.Publisher = Publisher = __decorate([
    (0, typeorm_1.Entity)()
], Publisher);
//# sourceMappingURL=publisher.entity.js.map