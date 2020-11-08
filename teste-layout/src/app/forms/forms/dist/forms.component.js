"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormsComponent = /** @class */ (function () {
    function FormsComponent(fb, router, formService) {
        this.fb = fb;
        this.router = router;
        this.formService = formService;
        this.inputType = true;
        this.formGroup = {};
        this.testForm = this.fb.group({});
    }
    FormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formOptionsMemoryRelease = this.formService.getFormOptions()
            .subscribe(function (result) {
            _this.formOptions = result;
            _this.testForm = _this.fb.group(_this.generateFormGroup(_this.formOptions));
            _this.testForm.disable();
        })
            .add(function () {
            _this.formOptionsMemoryRelease.unsubscribe();
        });
    };
    FormsComponent.prototype.onSubmit = function () {
    };
    FormsComponent.prototype.generateFormGroup = function (form) {
        var _this = this;
        var defaultValue = "";
        form.forEach(function (form) {
            if (_this.checkSelect(form.tipo)) {
                defaultValue = form.opcoes[0];
            }
            else if (_this.checkFile(form.tipo)) {
                defaultValue = "";
                _this.fileURL = _this.formService.getFileURL(form.valor);
            }
            else {
                defaultValue = form.valor;
            }
            _this.formGroup[form.titulo] = [defaultValue, forms_1.Validators.required];
        });
        return this.formGroup;
    };
    FormsComponent.prototype.checkSelect = function (tipo) {
        if (tipo === 'select')
            return true;
        else
            return false;
    };
    FormsComponent.prototype.checkFile = function (tipo) {
        if (tipo === 'file')
            return true;
        else
            return false;
    };
    FormsComponent.prototype.onClick = function (name) {
        return this.formService.getFileURL(name);
    };
    __decorate([
        core_1.ViewChild('typeInput')
    ], FormsComponent.prototype, "typeInput");
    FormsComponent = __decorate([
        core_1.Component({
            selector: 'app-forms',
            templateUrl: './forms.component.html',
            styleUrls: ['./forms.component.scss']
        })
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;
