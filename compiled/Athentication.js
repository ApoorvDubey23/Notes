"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserSchema_1 = __importDefault(require("./UserSchema"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/login', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const gmail = req.body.gmail;
    const password = req.body.password;
    const newUser = new UserSchema_1.default({
        name,
        gmail,
        password
    });
    newUser.save().then(() => console.log("user created successfully")).catch((error) => console.log(" login error", error));
});
