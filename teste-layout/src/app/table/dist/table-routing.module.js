"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var table_component_1 = require("./table/table.component");
var routes = [
    {
        path: '',
        component: table_component_1.TableComponent,
        data: {
            breadcrumb: [
                { url: "", label: "Tabela" }
            ]
        }
    }
];
var TableRoutingModule = /** @class */ (function () {
    function TableRoutingModule() {
    }
    TableRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TableRoutingModule);
    return TableRoutingModule;
}());
exports.TableRoutingModule = TableRoutingModule;
