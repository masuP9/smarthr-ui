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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Table_1 = require("./Table");
var withTheme_1 = require("../../hocs/withTheme");
var HeadComponent = function (_a) {
    var theme = _a.theme, _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children;
    return (React.createElement(Wrapper, { theme: theme, className: className },
        React.createElement(Table_1.TableGroupContext.Provider, { value: { group: 'head' } }, children)));
};
var Wrapper = styled_components_1.default.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return "\n    background-color: " + theme.palette.COLUMN + ";\n  ";
});
exports.Head = withTheme_1.withTheme(HeadComponent);
var templateObject_1;
//# sourceMappingURL=Head.js.map