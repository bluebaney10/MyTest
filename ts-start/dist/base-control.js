"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseControl = void 0;
var BaseControl = /** @class */ (function () {
    function BaseControl(el) {
        this.selected = null;
        this.options = [];
        this.element = el;
        this.createOptions();
    }
    BaseControl.prototype.select = function (option) {
        this.selected = option;
    };
    BaseControl.prototype.createOptions = function () {
        var _this = this;
        this.element.querySelectorAll('.options .option').forEach(function (op) {
            var option = {
                productEditionId: parseInt(op.getAttribute('data-id'), 10),
                element: op,
                name: op.getAttribute('data-name'),
                price: parseFloat(op.getAttribute('data-price'))
            };
            option.element.addEventListener('click', function () {
                _this.select(option);
            });
            _this.options.push(option);
        });
        console.log(this.options);
    };
    return BaseControl;
}());
exports.BaseControl = BaseControl;
