require("dotenv").config();
export const PORT = process.env.PORT || 3044;
export const DATABASE_URI: any = process.env.DATABASE_URL;
export const RAPID_API_KEY = process.env.RAPID_API_KEY;
export const RAPID_API_HOST = process.env.RAPID_API_HOST;
export const BASE_URL = process.env.BASE_URL;
export const SECRET_KEY: any = process.env.SECRET_KEY;
export const headers = {
  "content-type": "application/json",
  "X-RapidAPI-Key": RAPID_API_KEY,
  "X-RapidAPI-Host": RAPID_API_HOST,
};
