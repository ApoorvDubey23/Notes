"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connect_1 = __importDefault(require("./connect"));
const app_1 = __importDefault(require("./app"));
(0, connect_1.default)();
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
