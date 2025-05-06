const express = require("express");
const morgan = require("morgan");
const app = express();

const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US Flag",
    title: "Go to US English site",
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
  {
    path: "/dari",
    flag: "flag-of-Afghanistan.svg.png", 
    alt: "بیرق افغانستان",
    title: "به سایت دری بروید",
  },
  {
    path: "/pashto",
    flag: "flag-of-Afghanistan.svg.png",
    alt: "د افغانستان بیرغ",
    title: "پښتو سایټ ته لاړ شئ",
  },
  {
    path: "/japanese",
    flag: "flag_of_Japan.svg.png", 
    alt: "日本の旗",
    title: "日本語サイトへ",
  },
];

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.get("/", (req, res) => {
    res.render("hello-world-english", {
    });
})

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language:"en-US",
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    languague:"fr-FR",
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "sr-Cyrl-rs",
  });
});

app.get("/dari", (req, res) => {
  res.render("hello-world-dari", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "fa-AF",
  });
});

app.get("/pashto", (req, res) => {
  res.render("hello-world-pashto", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "ps-AF", 
  });
});

app.get("/japanese", (req, res) => {
  res.render("hello-world-japanese", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "ja-JP", 
  });
});

app.listen(3000, "localhost", () => {
    console.log("Listening on port 3000.");
})