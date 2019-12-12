import mongoose from "mongoose";
// const uri: string = "mongodb+srv://kamaluddin:chelharthar@kashif-ucesm.mongodb.net/test?retryWrites=true&w=majority";
const uri:string = "mongodb+srv://bootcamp:bootcamp@cluster0-kgzuu.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri,{ useNewUrlParser: true });
export default mongoose;
