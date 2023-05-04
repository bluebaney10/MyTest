"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductConfiguraionPicker = void 0;
var base_control_1 = require("./base-control");
var ProductConfiguraionPicker = /** @class */ (function (_super) {
    __extends(ProductConfiguraionPicker, _super);
    function ProductConfiguraionPicker(el) {
        var _this = _super.call(this, el) || this;
        _this.createOptions();
        return _this;
    }
    ProductConfiguraionPicker.prototype.select = function (option) {
        _super.prototype.select.call(this, option);
        this.removeActionClass();
        this.selected.element.classList.add('active');
        console.log(this.selected);
    };
    ProductConfiguraionPicker.prototype.removeActionClass = function () {
        this.options.forEach(function (opt) {
            opt.element.classList.remove('active');
        });
    };
    return ProductConfiguraionPicker;
}(base_control_1.BaseControl));
exports.ProductConfiguraionPicker = ProductConfiguraionPicker;
