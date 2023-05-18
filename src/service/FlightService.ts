import {
  BASE_URL,
  RAPID_API_HOST,
  RAPID_API_KEY,
  headers,
} from "../config/config";
import axios from "axios";
export class FlightService {
  /**
   *
   * @param payload
   * @returns
   * This class made the api calls to the skyscanner endpoints
   */
  create = async (payload: any) => {
    const option = {
      method: "POST",
      url: `${BASE_URL}/flights/live/search/create`,
      headers,
      data: payload,
    };
    return await axios.request(option);
  };

  pollSearch = async (sessionToken: any) => {
    const option = {
      method: "POST",
      url: `${BASE_URL}/flights/live/search/poll/${sessionToken}`,
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
    };
    return await axios.request(option);
  };

  autoSuggestFlight = async (payload: any) => {
    const option = {
      method: "POST",
      url: `${BASE_URL}/autosuggest/flights`,
      headers,
      data: payload,
    };
    return await axios.request(option);
  };
  autoSuggestHotels = async (payload: any) => {
    const option = {
      method: "POST",
      url: `${BASE_URL}/autosuggest/flights`,
      headers,
      data: payload,
    };
    return await axios.request(option);
  };
  searchHotels = async (payload: any) => {
    const option = {
      method: "POST",
      url: `${BASE_URL}e/hotels/live/search/create`,
      headers,
      data: payload,
    };
    return await axios.request(option);
  };
  getLocals = async (payload: any) => {
    const option = {
      method: "GET",
      url: `${BASE_URL}/culture/locales`,
      headers,
    };
    return await axios.request(option);
  };
  getCarrier = async () => {
    const option = {
      method: "GET",
      url: `${BASE_URL}/flights/carriers`,
      headers,
    };
    return await axios.request(option);
  };
  getLocations = async (locale: string) => {
    const option = {
      method: "GET",
      url: `${BASE_URL}/geo/hierarchy/flights/${locale}`,
      headers,
    };
    return await axios.request(option);
  };
}
