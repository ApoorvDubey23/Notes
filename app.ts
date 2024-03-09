import Express from "express"
const app = Express();
import authRouter from "./AuthRouter"
app.use(Express.json());
import noteRouter from "./NoteRouter"
app.use("/auth",authRouter);

app.use("/note",noteRouter); 

export default app;