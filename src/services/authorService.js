import { apiUrl } from "../config.json";
import httpService from "./httpService";

const authorsUrl = apiUrl + "authors";

const getAll = async (params) => httpService.get(authorsUrl, params);

export default {
  getAll,
};
