"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("./AuthController");
const router = express_1.default.Router();
router.route("/signup").post(AuthController_1.signup);
router.route("/login").post(AuthController_1.login);
exports.default = router;
