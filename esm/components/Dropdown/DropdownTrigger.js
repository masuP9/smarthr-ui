import * as React from 'react';
import { DropdownConsumer } from './Dropdown';
export var DropdownTrigger = function (_a) {
    var children = _a.children;
    return (React.createElement(DropdownConsumer, null, function (_a) {
        var keyName = _a.keyName, toggleDropdown = _a.toggleDropdown, active = _a.active;
        return (React.createElement("div", { 
            /* tslint:disable:jsx-no-lambda */
            onClick: function (e) { return toggleDropdown(e.currentTarget.getBoundingClientRect()); }, className: keyName }, React.Children.map(children, function (child) {
            var props = child.props ? child.props : {};
            var _a = props.className, className = _a === void 0 ? '' : _a;
            switch (typeof child) {
                case 'string':
                    return child;
                case 'object':
                    return React.cloneElement(child, {
                        className: (active ? 'active' : '') + " " + className,
                    });
                default:
                    return null;
            }
        })));
    }));
};
//# sourceMappingURL=DropdownTrigger.js.map