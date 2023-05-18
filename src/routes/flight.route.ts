import express from "express";
import { FlightController } from "../controllers/FlightController";
import { authorization } from "../middleware/auth.middleware";
const {
  searchFlight,
  pollSearch,
  searchHotels,
  autoSuggestFlight,
  autoSuggestHotels,
  getLocals,
  getCarrier,
  getLocations,
} = new FlightController();
const router = express.Router();
router.post("/create-flight", authorization, searchFlight);
router.get("/poll-search/:sessionToken", authorization, pollSearch);
router.post("/search-hotel", authorization, searchHotels);
router.post("/auto-suggest-flight", authorization, autoSuggestFlight);
router.post("/auto-suggest-hotels", authorization, autoSuggestHotels);
router.get("/locals", authorization, getLocals);
router.get("/carrier", authorization, getCarrier);
router.get("/location/:locale", authorization, getLocations);
export default router;
