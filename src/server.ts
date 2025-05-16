import app from "./app";
import { connectDB } from "./config/dataBase";
const PORT  = 3000;

//se resuelve
//tiene eroor
connectDB().then(res=>{
    app.listen(PORT, ()=>{
        console.log("Server corriendo en http://localhost: "+PORT+" :3");
    })
}).catch(err=>console.error(err));