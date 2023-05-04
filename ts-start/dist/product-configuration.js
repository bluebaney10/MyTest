"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductConfiguration = void 0;
var product_configuration_step_1 = require("./product-configuration-step");
var ProductConfiguration = /** @class */ (function () {
    function ProductConfiguration(el) {
        this.productId = 0;
        this.configurablePrice = 0;
        this.steps = [];
        this.el = el;
        this.createStep();
    }
    ProductConfiguration.prototype.createStep = function () {
        var _this = this;
        this.el.querySelectorAll('.step').forEach(function (step) {
            _this.steps.push(new product_configuration_step_1.ProductConfigurationStep(step));
        });
        console.log(this.steps);
    };
    ProductConfiguration.prototype.backStep = function () { };
    ProductConfiguration.prototype.nextStep = function () { };
    ProductConfiguration.prototype.gotoStep = function () { };
    ProductConfiguration.prototype.calculatePrice = function () { };
    return ProductConfiguration;
}());
exports.ProductConfiguration = ProductConfiguration;
