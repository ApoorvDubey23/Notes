import  Express  from "express";
import Notes from "./NoteSchema";
export async function makenote(req: Express.Request, res: Express.Response){
    const title=req.body.title;
    const content=req.body.content;
    const completed=req.body.completed;    
    const newNote=new Notes({
      title,
      content,
      completed
    })
    await newNote.save().catch((error)=>console.log("error",error),
    res.status(201).send("created note")

    )};
  