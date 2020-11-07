"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var TableComponent = /** @class */ (function () {
    function TableComponent(router, tableService) {
        this.router = router;
        this.tableService = tableService;
        this.tableKeys = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableMemoryRelease = this.tableService.getTable()
            .subscribe(function (result) {
            _this.table = result;
            _this.table.forEach(function (table) {
                Object.keys(table).forEach(function (key) {
                    _this.tableKeys.push(key);
                });
            });
            _this.tableKeys = __spreadArrays(new Set(_this.tableKeys));
        })
            .add(function () {
            _this.tableMemoryRelease.unsubscribe();
        });
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.scss']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
