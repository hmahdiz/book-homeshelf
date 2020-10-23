import { apiUrl } from "../config.json";
import httpService from "./httpService";

const userUrl = apiUrl + "user/";

const getPurchases = async ({ username, ...restParams }) =>
  httpService.get(userUrl + "purchases?username=" + username, restParams);

const purchase = async ({ bookId, username, ...restParams }) =>
  httpService.post(userUrl + "purchase", { bookId, username }, restParams);

export default {
  getPurchases,
  purchase,
};
