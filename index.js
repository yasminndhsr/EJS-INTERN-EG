import express from "express";
import { route } from "./src/routes/index.routes.js";
const app = express();

app.set("views" , "./src/views/");
app.set("view engine", "ejs");
app.use(express.static("./public"));

route(app);

app.listen(3000, ()=>{
    console.log("Server is listening on http://localhost:3000")
})