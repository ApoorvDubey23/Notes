"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const AuthRouter_1 = __importDefault(require("./AuthRouter"));
app.use(express_1.default.json());
const NoteRouter_1 = __importDefault(require("./NoteRouter"));
app.use("/auth", AuthRouter_1.default);
app.use("/note", NoteRouter_1.default);
exports.default = app;
