import Express from "express";
import { login, signup } from "./AuthController";


const router = Express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;