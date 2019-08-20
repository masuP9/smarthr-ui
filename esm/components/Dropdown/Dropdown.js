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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { getParentElementRecursively, getRandomStr } from './helper';
var _a = React.createContext({
    keyName: '',
    active: false,
    toggleDropdown: function (_) { return null; },
}), Consumer = _a.Consumer, Provider = _a.Provider;
export var DropdownConsumer = Consumer;
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { active: false };
        _this.keyName = getRandomStr();
        _this.componentDidMount = function () {
            document.body.addEventListener('click', _this.handleClickBody);
        };
        _this.handleToggle = function (clientRect) {
            _this.setState(function (state) { return ({ active: !state.active, clientRect: clientRect }); });
        };
        _this.handleClickBody = function (e) {
            if (getParentElementRecursively(e.target, _this.keyName))
                return;
            _this.setState({ active: false });
        };
        return _this;
    }
    Dropdown.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('click', this.handleClickBody);
    };
    Dropdown.prototype.render = function () {
        return (React.createElement(Provider, { value: {
                keyName: this.keyName,
                active: this.state.active,
                toggleDropdown: this.handleToggle,
                clientRect: this.state.clientRect,
            } },
            React.createElement(Wrapper, { className: this.state.active ? 'active' : '' }, this.props.children)));
    };
    return Dropdown;
}(React.PureComponent));
export { Dropdown };
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var templateObject_1;
//# sourceMappingURL=Dropdown.js.map