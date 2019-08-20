"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var _a = React.createContext({
    showModal: function () { return null; },
    hideModal: function () { return null; },
    active: false,
}), Provider = _a.Provider, Consumer = _a.Consumer;
exports.ModalConsumer = Consumer;
var ModalWrapper = /** @class */ (function (_super) {
    __extends(ModalWrapper, _super);
    function ModalWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { active: false };
        _this.hide = function () {
            _this.setState({ active: false });
        };
        _this.show = function () {
            _this.setState({ active: true });
        };
        return _this;
    }
    ModalWrapper.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(Provider, { value: {
                showModal: this.show,
                hideModal: this.hide,
                active: this.state.active,
            } }, children));
    };
    return ModalWrapper;
}(React.PureComponent));
exports.ModalWrapper = ModalWrapper;
//# sourceMappingURL=ModalWrapper.js.map