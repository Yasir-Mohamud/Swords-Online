// importing all the neccessary packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// import routes
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// This starts the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
