"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const NoteController_1 = require("./NoteController");
const router = express_1.default.Router();
router.route("/").post(NoteController_1.makenote);
exports.default = router;
