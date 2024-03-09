import Express from "express";
import { makenote } from "./NoteController";
const router=Express.Router();



router.route("/").post(makenote);
export default router;
