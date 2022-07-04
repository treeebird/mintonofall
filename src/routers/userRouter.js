import express from "express";
import { append } from "express/lib/response";
import { getJoin, postJoin } from "../controllers/usercontroller";

const userRouter = express.Router();

userRouter.route("/join").get(getJoin).post(postJoin);

export default userRouter;