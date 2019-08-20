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
import styled, { css } from 'styled-components';
import { hoverable } from '../../hocs/hoverable';
import { withTheme } from '../../hocs/withTheme';
import { isTouchDevice } from '../../libs/ua';
var PaginationItemComponent = /** @class */ (function (_super) {
    __extends(PaginationItemComponent, _super);
    function PaginationItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
            var _a = _this.props, onClick = _a.onClick, page = _a.page;
            onClick(page);
        };
        return _this;
    }
    PaginationItemComponent.prototype.render = function () {
        var _a = this.props, page = _a.page, currentPage = _a.currentPage, theme = _a.theme;
        if (page === currentPage) {
            return (React.createElement(Item, { className: "PaginationItem active", theme: theme }, page));
        }
        return (React.createElement(ItemButton, { className: "PaginationItem", onClick: this.onClick, theme: theme }, page));
    };
    return PaginationItemComponent;
}(React.PureComponent));
export var PaginationItem = withTheme(PaginationItemComponent);
var Item = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    var size = theme.size, palette = theme.palette, interaction = theme.interaction;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: inline-block;\n      width: 34px;\n      padding: 0;\n      border: none;\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 32px;\n      text-align: center;\n      cursor: pointer;\n      outline: 0;\n      transition: ", ";\n\n      &.active {\n        color: #fff;\n        background-color: ", ";\n      }\n\n      &.hover {\n        color: ", ";\n        background-color: ", ";\n      }\n    "], ["\n      display: inline-block;\n      width: 34px;\n      padding: 0;\n      border: none;\n      background-color: #fff;\n      font-size: ", ";\n      color: ", ";\n      line-height: 32px;\n      text-align: center;\n      cursor: pointer;\n      outline: 0;\n      transition: ", ";\n\n      &.active {\n        color: #fff;\n        background-color: ", ";\n      }\n\n      &.hover {\n        color: ", ";\n        background-color: ", ";\n      }\n    "])), size.pxToRem(size.font.TALL), palette.MAIN, isTouchDevice ? 'none' : "background-color " + interaction.hover.animation, palette.MAIN, palette.MAIN, palette.hoverColor('#fff'));
});
export var ItemButton = hoverable()(Item.withComponent('button'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=PaginationItem.js.map