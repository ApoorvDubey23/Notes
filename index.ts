import dotenv from "dotenv"
dotenv.config();
import connect from "./connect"
import app from "./app"
connect();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
