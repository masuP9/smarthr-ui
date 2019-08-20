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
var PaginationItem_1 = require("./PaginationItem");
var NextPaginationItemComponent = /** @class */ (function (_super) {
    __extends(NextPaginationItemComponent, _super);
    function NextPaginationItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            var _a = _this.props, onClick = _a.onClick, nextPage = _a.nextPage;
            onClick(nextPage);
        };
        return _this;
    }
    NextPaginationItemComponent.prototype.render = function () {
        return (React.createElement(Button, { className: "PaginationItem", onClick: this.onClick, theme: this.props.theme }, "\u203A"));
    };
    return NextPaginationItemComponent;
}(React.PureComponent));
exports.NextPaginationItem = withTheme_1.withTheme(NextPaginationItemComponent);
var Button = styled_components_1.default(PaginationItem_1.ItemButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.palette.TEXT_GREY);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=NextPaginationItem.js.map