import { apiUrl } from "../config.json";
import httpService from "./httpService";

const authorsUrl = apiUrl + "authors";

const getAll = async (success, error) => httpService.get(authorsUrl, success, error);

export default {
  getAll,
};
