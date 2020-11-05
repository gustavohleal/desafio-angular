"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarPanelComponent = void 0;
var core_1 = require("@angular/core");
var CarPanelComponent = /** @class */ (function () {
    function CarPanelComponent(router, activeRouter) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.speed = 880; // reduz de 0 até 610
        this.rotate = -35; //vai de -35 até 215
        this.flag = true;
    }
    CarPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.flag) {
                _this.speed -= 100;
                _this.rotate += 30;
                if (_this.speed <= 275) {
                    _this.flag = false;
                }
            }
            else {
                _this.speed++;
                _this.rotate--;
                if (_this.speed >= 880) {
                    _this.flag = true;
                }
            }
        }, 5000);
    };
    CarPanelComponent = __decorate([
        core_1.Component({
            selector: 'app-car-panel',
            templateUrl: './car-panel.component.html',
            styleUrls: ['./car-panel.component.scss']
        })
    ], CarPanelComponent);
    return CarPanelComponent;
}());
exports.CarPanelComponent = CarPanelComponent;
