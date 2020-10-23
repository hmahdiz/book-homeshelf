import { apiUrl } from "../config.json";
import httpService from "./httpService";

const frontImageBookUrl = apiUrl + "uploadfile/frontImageBook/";

const uploadFrontImageBook = ({ id, data, ...restParams }) =>
  httpService.post(frontImageBookUrl + id, data, restParams);

export default {
  uploadFrontImageBook,
};
