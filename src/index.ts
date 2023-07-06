import express from "express";
import mongoose from "mongoose";
import route from "./routes";
import bodyParser from "body-parser";
import { PORT, DATABASE_URI } from "./config/config";
import { errorConverter, errorHandler } from "./utils/error";
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
// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
