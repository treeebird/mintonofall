import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
const app=express();
const logger = morgan("dev");

app.listen(4000, () => {
    console.log("Listen at PORT 4000");
})

app.use(logger);
app.get("/", (req, res) => res.send("Hello"));