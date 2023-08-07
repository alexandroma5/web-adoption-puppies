require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handleByNext = app.getRequestHandler();

const startServer = () => {
  const app = express();
  app.use(express.json());
  if (dev) app.use(morgan("dev"));
  app.set("port", 80);

  app.all("*", handleByNext);

  app.listen(app.get("port"), (err) => {
    if (err) return console.log(err);
    console.log(`running at port ${app.get("port")}: state 💯`);
  });
};

const dbConnection = require("./_server/5DataAccess/db.connection");

app
  .prepare()
  .then(dbConnection)
  .then(startServer)
  .catch((error) => console.log("something went wrong 🥶", error));
