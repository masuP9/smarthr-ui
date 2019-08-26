var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { TableGroupContext } from './Table';
import { withTheme } from '../../hocs/withTheme';
var HeadComponent = function (_a) {
    var theme = _a.theme, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
    return (React.createElement(Wrapper, { theme: theme, className: className },
        React.createElement(TableGroupContext.Provider, { value: { group: 'head' } }, children)));
};
var Wrapper = styled.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return "\n    background-color: " + theme.palette.COLUMN + ";\n  ";
});
export var Head = withTheme(HeadComponent);
var templateObject_1;
//# sourceMappingURL=Head.js.map