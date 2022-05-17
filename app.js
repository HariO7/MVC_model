const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.port;
const product = require("./routes/product.route");

//connecting to mongoose
mongoose.connect(process.env.url, () => {
  console.log("connected to database");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

app.listen(port, () => {
  console.log("listening on server ");
});
