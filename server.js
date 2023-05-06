require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./src/app");
const {
  PORT,
  MONGO_DB_URI,
} = require("./src/infrastructure/config/environment");
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("db connected");
    http.createServer(app).listen(PORT, () => {
      console.log("server is runing port ", PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
