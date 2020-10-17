import { apiUrl } from "../config.json";
import httpService from "./httpService";

const frontImageBookUrl = apiUrl + "uploadfile/frontImageBook/";

const uploadFrontImageBook = (id, data, success, error) =>
  httpService.post(frontImageBookUrl + id, data, success, error);

export default {
  uploadFrontImageBook,
};
