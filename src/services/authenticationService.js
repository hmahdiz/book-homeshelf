import { apiUrl } from "../config.json";
import httpService from "./httpService";

const signUpUrl = apiUrl + "signup";
const signInUrl = apiUrl + "signin";

const signUp = ({ data, ...restParams }) => httpService.post(signUpUrl, data, restParams);

const signIn = ({ data, ...restParams }) => httpService.post(signInUrl, data, restParams);

export default {
  signUp,
  signIn,
};
