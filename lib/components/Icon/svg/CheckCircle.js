"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var withTheme_1 = require("../../../hocs/withTheme");
var CheckCircleIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 16 : _b, color = _a.color, theme = _a.theme;
    return (React.createElement("svg", { width: size + "px", height: size + "px", viewBox: "0 0 100 100" },
        React.createElement("title", null, "check circle"),
        React.createElement("g", { id: "Check_Circle" },
            React.createElement("path", { d: "M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0ZM75.21,41.7l-28,28.24a5,5,0,0,1-3.55,1.47h0A5,5,0,0,1,40,69.9l-15.58-16a5,5,0,0,1,7.16-7l12,12.33L68.11,34.65a5,5,0,0,1,7.1,7.05Z", fill: color ? color : theme.palette.TEXT_GREY, style: { fillRule: 'evenodd' } }))));
};
exports.CheckCircle = withTheme_1.withTheme(CheckCircleIcon);
//# sourceMappingURL=CheckCircle.js.map