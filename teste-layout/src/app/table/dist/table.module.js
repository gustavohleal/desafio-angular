"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var table_component_1 = require("./table/table.component");
var http_1 = require("@angular/common/http");
var table_routing_module_1 = require("./table-routing.module");
var table_service_1 = require("../shared/services/table.service");
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        core_1.NgModule({
            declarations: [table_component_1.TableComponent],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                table_routing_module_1.TableRoutingModule
            ],
            providers: [
                table_service_1.TableService
            ]
        })
    ], TableModule);
    return TableModule;
}());
exports.TableModule = TableModule;
