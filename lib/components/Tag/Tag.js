"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var withTheme_1 = require("../../hocs/withTheme");
var TagComponent = function (_a) {
    var _b = _a.skeleton, skeleton = _b === void 0 ? false : _b, type = _a.type, children = _a.children, theme = _a.theme;
    return (React.createElement(Wrapper, { theme: theme, className: type, skeleton: skeleton }, children));
};
var Wrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme, skeleton = _a.skeleton;
    var frame = theme.frame, size = theme.size, palette = theme.palette;
    var MAIN = palette.MAIN, DANGER = palette.DANGER, WARNING = palette.WARNING, BORDER = palette.BORDER;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      margin: 0;\n      padding: 0 ", ";\n      display: inline-block;\n      white-space: nowrap;\n      font-size: ", "px;\n      border: ", ";\n      background-color: transparent;\n      color: ", ";\n\n      &.success {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &.error {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &.warning {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &.require {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n    "], ["\n      margin: 0;\n      padding: 0 ", ";\n      display: inline-block;\n      white-space: nowrap;\n      font-size: ", "px;\n      border: ", ";\n      background-color: transparent;\n      color: ", ";\n\n      &.success {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &.error {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &.warning {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &.require {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n    "])), size.pxToRem(theme.size.space.XXS), size.font.SHORT, frame.border.default, BORDER, MAIN, skeleton ? 'transparent' : MAIN, skeleton ? MAIN : '#fff', DANGER, skeleton ? 'transparent' : DANGER, skeleton ? DANGER : '#fff', WARNING, skeleton ? 'transparent' : WARNING, skeleton ? WARNING : '#fff', WARNING, skeleton ? 'transparent' : WARNING, skeleton ? WARNING : '#fff');
});
exports.Tag = withTheme_1.withTheme(TagComponent);
var templateObject_1, templateObject_2;
//# sourceMappingURL=Tag.js.map