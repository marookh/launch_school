const express = require("express");
const morgan = require("morgan");

const app = express();
const host = "localhost";
const port = 3000;

// Static data for initial testing
let todoLists = require("./lib/seed-data");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("lists", { todoLists });
});

app.listen(port, host, () => {
    console.log(`Todos is listening on port ${port} of ${host}!`);
});