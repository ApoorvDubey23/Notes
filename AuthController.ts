import Express from "express";
import User from "./UserSchema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export async function signup(req: Express.Request, res: Express.Response) {
  // console.log(req.body);

  const name = req.body.name;
  const gmail = req.body.gmail;
  const password = await bcrypt.hash(req.body.password, 10);
  const newUser = await new User({
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
  const token = jwt.sign(payload, secret_key, { expiresIn: "5h" });
  res.status(201).cookie("token", token).json();
}

export async function login(req: Express.Request, res: Express.Response) {
  const name = req.body.name;
  const recpassword = req.body.password;
  console.log(await bcrypt.hash(recpassword,10));
  

  try {
    const founduser = await User.findOne({ name });
   
      if (founduser) {
        console.log(founduser);
        const isvalid=await bcrypt.compare(recpassword,founduser.password);
       if(isvalid) res.status(200).send("user found");
       else{res.send("password is incorrect")}
        
        
      } else {
        console.log("User does not exist");
        res.status(404).json("User does not exist");
      };
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json("Failed to find user");
  }
 
 
}
