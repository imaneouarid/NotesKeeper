import express from "express";
const app = express();
import db from "./Models/index.js";
import NteRoute from "./Routes/NotesRoutes.js";

app.use(express.json());
app.use(db.cors());
app.use('/api', NteRoute);

const startserver = async () =>{
    try{ 
        await db.mongoose.connect(db.url, {
            dbName : ""        
        });
        console.log("Connection to the database successful");
        
        app.listen(db.PORT,()=>{
            console.log("http://localhost:"+db.PORT);
        })  
    }catch(error){
        console.log(error.message);
    }
} 
startserver();