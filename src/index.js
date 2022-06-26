import express from "express";
import { send } from "express/lib/response";
import morgan from "morgan"

const app = express();

const getJoin = (req, res) => {
    return res.render("join");
}

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan('tiny'));

app.get("/", (req,res) => res.render("home", { pageTitle: "Home"}));
app.get("/login", (req,res) => res.render("login", {pageTitle: "Login"}));
app.route("/join").get(getJoin);

app.listen(4000, console.log("Hello world"));
