import express from "express";
import mongoose from "mongoose";
import route from "./routes";
import bodyParser from "body-parser";
import { PORT, DATABASE_URI } from "./config/config";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(DATABASE_URI)
  .then(async () => {
    console.log("Conneting to database");
  })
  .catch(() => {
    console.log("Could not connect to dabase");
  });
app.use(route);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
