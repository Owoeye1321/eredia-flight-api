import express from "express";
const route = express.Router();
import Auth from "./auth.route";
import Flight from "./flight.route";
route.use("/api/v1/auth", Auth);
route.use("/api/v1/flight", Flight);
export default route;
