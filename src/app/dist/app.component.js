"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.displayValue = '0';
        this.first_value = 0;
        this.secund_value = 0;
        this.op_atual = '';
        this.current_value = 0;
        this.clearDisplay = true;
    }
    AppComponent.prototype.resetCalculator = function () {
        this.displayValue = '0';
        this.first_value = 0;
        this.secund_value = 0;
        this.current_value = 0;
        this.clearDisplay = true;
        this.op_atual = '';
    };
    AppComponent.prototype.setOperation = function (op) {
        if (this.current_value === 0) {
            if (op !== '=') {
                this.op_atual = op;
                this.first_value = parseFloat(this.displayValue);
                this.displayValue = '0';
                this.current_value = 1;
            }
            else {
            }
        }
        else {
            this.secund_value = parseFloat(this.displayValue);
            var op_set;
            this.op_atual !== '' && op === '=' ? op_set = this.op_atual : op_set = op;
            this.calcResult(op_set, this.first_value, this.secund_value);
        }
    };
    AppComponent.prototype.calcResult = function (op, firstNumber, secundNumber) {
        switch (op) {
            case "+":
                var result = "" + (firstNumber + secundNumber);
                this.displayValue = result;
                this.first_value = parseFloat(result);
                this.secund_value = 0;
                this.clearDisplay = true;
                this.op_atual = op;
                break;
            case "-":
                var result = "" + (firstNumber - secundNumber);
                this.displayValue = result;
                this.first_value = parseFloat(result);
                this.secund_value = 0;
                this.clearDisplay = true;
                this.op_atual = op;
                break;
            case "x":
                var result = "" + firstNumber * secundNumber;
                this.displayValue = result;
                this.first_value = parseFloat(result);
                this.secund_value = 0;
                this.clearDisplay = true;
                this.op_atual = op;
                break;
            case "div":
                var result = "" + firstNumber / secundNumber;
                this.displayValue = result;
                this.first_value = parseFloat(result);
                this.secund_value = 0;
                this.clearDisplay = true;
                this.op_atual = op;
                break;
            default:
                break;
        }
    };
    AppComponent.prototype.addDigit = function (number) {
        if (!this.clearDisplay) {
            if (this.displayValue === '0' && number !== '0' && number !== '.') {
                this.displayValue = '';
                this.displayValue += number;
            }
            else if (number === '.' && this.displayValue.includes('.')) { }
            else {
                this.displayValue += number;
            }
        }
        else {
            this.displayValue = '';
            this.clearDisplay = false;
            if (this.displayValue === '0' && number !== '0' && number !== '.') {
                this.displayValue += number;
            }
            else if (number === '.' && this.displayValue.includes('.')) { }
            else {
                this.displayValue += number;
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
