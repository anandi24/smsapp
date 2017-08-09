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
var core_1 = require('@angular/core');
var http_service_1 = require('../service/http.service');
var SMSComponent = (function () {
    function SMSComponent(httpService) {
        this.httpService = httpService;
        this.step = 0;
        this.user = '';
        this.passwd = '';
        this.message = '';
        this.mobilenumber = '';
        this.searchResults = '';
        this.sms = new SMS();
        this.report = new Report();
    }
    SMSComponent.prototype.sendSMS = function () {
        var _this = this;
        this.step += 1;
        this.searchResults = '';
        var validateBody = JSON.stringify(this.sms);
        this.httpService.sendSMS(validateBody, "sendSMS").subscribe(function (resp) {
            if (resp != null) {
                _this.searchResults = resp.messageResponse;
            }
            console.log(_this.searchResults);
        }, function (error) {
            console.log(error);
        });
    };
    SMSComponent.prototype.multiSMS = function () {
        var _this = this;
        this.step += 1;
        this.searchResults = '';
        var validateBody = JSON.stringify(this.sms);
        this.httpService.sendSMS(validateBody, "multiSMS").subscribe(function (resp) {
            if (resp != null) {
                _this.searchResults = resp.messageResponse;
            }
            console.log(_this.searchResults);
        }, function (error) {
            console.log(error);
        });
    };
    SMSComponent.prototype.generateReport = function () {
        var _this = this;
        this.searchResults = '';
        var validateBody = JSON.stringify(this.report);
        this.httpService.report(validateBody, "report").subscribe(function (resp) {
            if (resp != null) {
                _this.searchResults = resp.response;
            }
            console.log(_this.searchResults);
        }, function (error) {
            console.log(error);
        });
    };
    SMSComponent.prototype.getCurrentStep = function () {
        return this.step;
    };
    SMSComponent.prototype.goback = function () {
        this.step = this.step - 1;
    };
    SMSComponent.prototype.toReport = function () {
        this.step = this.step + 1;
    };
    SMSComponent = __decorate([
        core_1.Component({
            selector: 'smscomp',
            templateUrl: 'app/component/sms.component.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], SMSComponent);
    return SMSComponent;
}());
exports.SMSComponent = SMSComponent;
var SMS = (function () {
    function SMS() {
    }
    return SMS;
}());
var Report = (function () {
    function Report() {
    }
    return Report;
}());
//# sourceMappingURL=sms.component.js.map