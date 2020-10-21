import { apiUrl } from "../config.json";
import httpService from "./httpService";

const userUrl = apiUrl + "user/";

const getPurchases = async (username, success, error) =>
  httpService.get(userUrl + "purchases?username=" + username, success, error);

const purchase = async (bookId, username, succes, error) =>
  httpService.post(userUrl + "purchase", { bookId, username }, succes, error);

export default {
  getPurchases,
  purchase,
};
