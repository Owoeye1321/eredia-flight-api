import { FlightService } from "../service/FlightService";
export class FlightController {
  private _flightService: any;
  constructor() {
    this._flightService = new FlightService();
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   * The Flights Live Prices API is used to search for,
   * and return flight prices for a given route and set of dates.
   * API takes an origin and destination for a given date and returns a list of possible flights that will be bookable by travellers.
   * It will create a search where results might be incompleted.
   * Polling is required until status field shows as RESULT_STATUS_COMPLETE
   */
  searchFlight = async (req: any, res: any, next: any) => {
    try {
      const response = await this._flightService.create(req.body);
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };
  pollSearch = async (req: any, res: any, next: any) => {
    try {
      const { sessionToken } = req.params;
      const response = await this._flightService.pollSearch(sessionToken);
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };

  //The Hotels Live Prices API is used to search for, and return hotel prices for a given location and a set of dates.
  searchHotels = async (req: any, res: any, next: any) => {
    try {
      const response = await this._flightService.searchHotels(req.body);
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };

  // The Autosuggest API returns a list of places that match a specified searchTerm.
  autoSuggestFlight = async (req: any, res: any, next: any) => {
    try {
      const response = await this._flightService.autoSuggestFlight(req.body);
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };
  autoSuggestHotels = async (req: any, res: any, next: any) => {
    try {
      const response = await this._flightService.autoSuggestHotels(req.body);
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };

  //You can use the /locales endpoint to retrieve the locales that we support to translate your content.
  //The names of the locales returned are in the native language associated with the locale.
  getLocals = async (req: any, res: any, next: any) => {
    try {
      const response = await this._flightService.getLocals();
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };

  //The Carriers API returns a full list of active carriers with name and IATA code indexed by their carrierId.
  getCarrier = async (req: any, res: any, next: any) => {
    try {
      const response = await this._flightService.getCarrier();
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };

  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   * Geographical locations have the concept of hierarchy.
   * Each location has a parent of a larger hierarchy.
   * I.e.: a place type of airport can have a parent of city and city can have a parent of country.
   */
  getLocations = async (req: any, res: any, next: any) => {
    try {
      const { locale } = req.params;
      const response = await this._flightService.getLocations(locale);
      return res.status(200).send({
        success: true,
        data: response.data,
      });
    } catch (error: any) {
      return res.status(400).send({ success: true, message: error.message });
    }
  };
}
