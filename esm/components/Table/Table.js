var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
export var TableGroupContext = React.createContext({
    group: 'body',
});
export var Table = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement(Wrapper, { className: className }, children));
};
var Wrapper = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n"])));
var templateObject_1;
//# sourceMappingURL=Table.js.map