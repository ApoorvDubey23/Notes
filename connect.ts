// connect.js

import mongoose from "mongoose";

// MongoDB connection URI
const mongoURI = "mongodb://127.0.0.1:27017/notessssss";

// Connect to MongoDB
export default function () {
  console.log("callled");
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to database!!"))
    .catch(console.log);
}
