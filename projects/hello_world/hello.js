const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("What's up, Doc?\n");
});

app.listen(3000, "localhost", () => {
    console.log("Listening on port 3000.");
})