"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooose = require("mongoose");
const NoteSchema = new mongooose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    completed: { type: Boolean }
}, { timestamps: true });
const Notes = mongooose.model("Notes", NoteSchema);
exports.default = Notes;
