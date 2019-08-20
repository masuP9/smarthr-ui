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
exports.ModalTrigger = function (_a) {
    var children = _a.children;
    return (React.createElement(ModalWrapper_1.ModalConsumer, null, function (_a) {
        var showModal = _a.showModal;
        return React.createElement("div", { onClick: showModal }, children);
    }));
};
//# sourceMappingURL=ModalTrigger.js.map