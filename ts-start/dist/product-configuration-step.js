"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductConfigurationStep = void 0;
var product_configuraion_picker_1 = require("./product-configuraion-picker");
var ProductConfigurationStep = /** @class */ (function () {
    function ProductConfigurationStep(el) {
        this.controls = [];
        this.element = el;
        this.createControl();
    }
    ProductConfigurationStep.prototype.createControl = function () {
        var _this = this;
        this.element.querySelectorAll('.ecf').forEach(function (el) {
            if (el.classList.contains('e-pk')) {
                _this.controls.push(new product_configuraion_picker_1.ProductConfiguraionPicker(el));
            }
        });
    };
    return ProductConfigurationStep;
}());
exports.ProductConfigurationStep = ProductConfigurationStep;
