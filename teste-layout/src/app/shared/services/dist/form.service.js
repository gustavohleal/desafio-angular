"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var operators_1 = require("rxjs/operators");
var FormService = /** @class */ (function () {
    function FormService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = environment_1.environment.apiURL;
        this.headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
        };
        this.requestOptions = {
            headers: new http_1.HttpHeaders(this.headerDict)
        };
    }
    FormService.prototype.getFormOptions = function () {
        var url = this.baseUrl + "/form";
        return this.http.get(url, this.requestOptions)
            .pipe(operators_1.map(function (data) { return data; }));
    };
    FormService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;