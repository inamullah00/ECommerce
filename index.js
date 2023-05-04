const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const itemRoute = require("./routes/itemRoute");
const dbConection = require("./config/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use("/item", itemRoute);
app.listen(8000, () => {
  console.log("Server is Running at PORT 8000");
});
