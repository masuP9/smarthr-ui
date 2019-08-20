var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../hocs/withTheme';
import { DropdownConsumer } from './Dropdown';
var getHorizontalPositionClassName = function (clientRect) {
    if (!clientRect)
        return 'center';
    if (clientRect.right < window.innerWidth / 2)
        return 'left';
    if (clientRect.left > window.innerWidth / 2)
        return 'right';
    return 'center';
};
var getVerticalPositionClassName = function (clientRect) {
    if (!clientRect)
        return 'middle';
    if (clientRect.top > window.innerHeight / 2)
        return 'bottom';
    if (clientRect.bottom < window.innerHeight / 2)
        return 'top';
    return 'middle';
};
var DropdownContentComponent = function (_a) {
    var offset = _a.offset, children = _a.children, theme = _a.theme;
    return (React.createElement(DropdownConsumer, null, function (_a) {
        var active = _a.active, clientRect = _a.clientRect;
        return (React.createElement(Wrapper, { className: (active ? 'active' : '') + " " + getHorizontalPositionClassName(clientRect) + " " + getVerticalPositionClassName(clientRect), offset: offset },
            React.createElement(Balloon, { theme: theme }, children)));
    }));
};
export var DropdownContent = withTheme(DropdownContentComponent);
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var _b = _a.offset, offset = _b === void 0 ? {} : _b;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      visibility: hidden;\n      opacity: 0;\n      transform: scale(0);\n      z-index: 1000;\n      position: absolute;\n      width: auto;\n      height: auto;\n      transition: visibility 0.1s cubic-bezier(0.215, 0.61, 0.355, 1),\n        opacity 0.1s cubic-bezier(0.215, 0.61, 0.355, 1),\n        transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n      &.top {\n        top: calc(100% + ", "px);\n      }\n\n      &.bottom {\n        bottom: calc(100% + ", "px);\n      }\n\n      &.right {\n        right: ", "px;\n      }\n\n      &.left {\n        left: ", "px;\n      }\n\n      &.active {\n        visibility: visible;\n        opacity: 1;\n        transform: scale(1);\n      }\n    "], ["\n      visibility: hidden;\n      opacity: 0;\n      transform: scale(0);\n      z-index: 1000;\n      position: absolute;\n      width: auto;\n      height: auto;\n      transition: visibility 0.1s cubic-bezier(0.215, 0.61, 0.355, 1),\n        opacity 0.1s cubic-bezier(0.215, 0.61, 0.355, 1),\n        transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n      &.top {\n        top: calc(100% + ", "px);\n      }\n\n      &.bottom {\n        bottom: calc(100% + ", "px);\n      }\n\n      &.right {\n        right: ", "px;\n      }\n\n      &.left {\n        left: ", "px;\n      }\n\n      &.active {\n        visibility: visible;\n        opacity: 1;\n        transform: scale(1);\n      }\n    "])), offset.y || 0, offset.y || 0, offset.x || 0, offset.x || 0);
});
var Balloon = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      display: inline-block;\n      border-radius: ", ";\n      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.35);\n      background-color: #fff;\n      white-space: nowrap;\n    "], ["\n      position: relative;\n      display: inline-block;\n      border-radius: ", ";\n      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.35);\n      background-color: #fff;\n      white-space: nowrap;\n    "])), theme.frame.border.radius.m);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=DropdownContent.js.map