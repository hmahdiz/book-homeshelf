import { apiUrl } from "../config.json";
import httpService from "./httpService";

const frontImageBookUrl = apiUrl + "uploadfile/frontImageBook/";

const uploadFrontImageBook = ({ id, file, ...restParams }) =>
  httpService.post(frontImageBookUrl + id, file, restParams);

export default {
  uploadFrontImageBook,
};
