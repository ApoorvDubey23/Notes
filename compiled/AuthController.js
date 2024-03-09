"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const UserSchema_1 = __importDefault(require("./UserSchema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req.body);
        const name = req.body.name;
        const gmail = req.body.gmail;
        const password = yield bcrypt_1.default.hash(req.body.password, 10);
        const newUser = yield new UserSchema_1.default({
            name,
            gmail,
            password: password,
        });
        newUser
            .save()
            .then(() => console.log("user created successfully"))
            .catch((error) => console.log(" login error", error));
        const secret_key = process.env.SECRET_KEY;
        const id = newUser._id.toString();
        const payload = {
            userId: id,
        };
        const token = jsonwebtoken_1.default.sign(payload, secret_key, { expiresIn: "5h" });
        res.status(201).cookie("token", token).json();
    });
}
exports.signup = signup;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.body.name;
        const recpassword = req.body.password;
        console.log(yield bcrypt_1.default.hash(recpassword, 10));
        try {
            const founduser = yield UserSchema_1.default.findOne({ name });
            if (founduser) {
                console.log(founduser);
                const isvalid = yield bcrypt_1.default.compare(recpassword, founduser.password);
                if (isvalid)
                    res.status(200).send("user found");
                else {
                    res.send("password is incorrect");
                }
            }
            else {
                console.log("User does not exist");
                res.status(404).json("User does not exist");
            }
            ;
        }
        catch (error) {
            console.error("Error finding user:", error);
            res.status(500).json("Failed to find user");
        }
    });
}
exports.login = login;
