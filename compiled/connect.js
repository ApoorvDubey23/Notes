"use strict";
// connect.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// MongoDB connection URI
const mongoURI = "mongodb://127.0.0.1:27017/notessssss";
// Connect to MongoDB
function default_1() {
    console.log("callled");
    mongoose_1.default
        .connect(mongoURI)
        .then(() => console.log("Connected to database!!"))
        .catch(console.log);
}
exports.default = default_1;
