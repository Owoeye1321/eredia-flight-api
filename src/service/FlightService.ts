import {
  BASE_URL,
  RAPID_API_HOST,
  RAPID_API_KEY,
  headers,
} from "../config/config";
import axios from "axios";
import ApiError from "../utils/apiError";
import httpStatus from "http-status";
export class FlightService {
  /**
   *
   * @param payload
   * @returns
   * This class made the api calls to the skyscanner endpoints
   */
  create = async (payload: any) => {
    try {
      const option = {
        method: "POST",
        url: `${BASE_URL}/flights/live/search/create`,
        headers,
        data: payload,
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };

  pollSearch = async (sessionToken: any) => {
    try {
      const option = {
        method: "POST",
        url: `${BASE_URL}/flights/live/search/poll/${sessionToken}`,
        headers: {
          "X-RapidAPI-Key": RAPID_API_KEY,
          "X-RapidAPI-Host": RAPID_API_HOST,
        },
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };

  autoSuggestFlight = async (payload: any) => {
    try {
      const option = {
        method: "POST",
        url: `${BASE_URL}/autosuggest/flights`,
        headers,
        data: payload,
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
  autoSuggestHotels = async (payload: any) => {
    try {
      const option = {
        method: "POST",
        url: `${BASE_URL}/autosuggest/flights`,
        headers,
        data: payload,
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
  searchHotels = async (payload: any) => {
    try {
      const option = {
        method: "POST",
        url: `${BASE_URL}e/hotels/live/search/create`,
        headers,
        data: payload,
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
  getLocals = async (payload: any) => {
    try {
      const option = {
        method: "GET",
        url: `${BASE_URL}/culture/locales`,
        headers,
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
  getCarrier = async () => {
    try {
      const option = {
        method: "GET",
        url: `${BASE_URL}/flights/carriers`,
        headers,
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
  getLocations = async (locale: string) => {
    try {
      const option = {
        method: "GET",
        url: `${BASE_URL}/geo/hierarchy/flights/${locale}`,
        headers,
      };
      return await axios.request(option);
    } catch (error) {
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, error.message);
    }
  };
}
