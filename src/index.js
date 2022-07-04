import express from "express";
import { send } from "express/lib/response";
import morgan from "morgan"
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended : true}));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.listen(4000, console.log("Hello world"));
