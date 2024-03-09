const mongooose =require("mongoose");
const NoteSchema=new mongooose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    completed:{type:Boolean}

},{timestamps:true})
const Notes= mongooose.model("Notes",NoteSchema);
export default Notes;
 