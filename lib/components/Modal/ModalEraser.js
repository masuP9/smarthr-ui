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
var ModalWrapper_1 = require("./ModalWrapper");
exports.ModalEraser = function (_a) {
    var children = _a.children;
    return (React.createElement(ModalWrapper_1.ModalConsumer, null, function (_a) {
        var hideModal = _a.hideModal;
        return React.createElement("div", { onClick: hideModal }, children);
    }));
};
//# sourceMappingURL=ModalEraser.js.map