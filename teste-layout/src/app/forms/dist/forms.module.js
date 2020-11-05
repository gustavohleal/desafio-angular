"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var forms_component_1 = require("./forms/forms.component");
var forms_routing_module_1 = require("./forms-routing.module");
var form_service_1 = require("../shared/services/form.service");
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        core_1.NgModule({
            declarations: [forms_component_1.FormsComponent],
            imports: [
                common_1.CommonModule,
                forms_routing_module_1.FormsRoutingModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                form_service_1.FormService
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
exports.FormsModule = FormsModule;
