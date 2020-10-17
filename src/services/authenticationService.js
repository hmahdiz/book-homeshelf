import { apiUrl } from "../config.json";
import httpService from "./httpService";

const signUpUrl = apiUrl + "signup";
const signInUrl = apiUrl + "signin";

const signUp = (data, success, error) => httpService.post(signUpUrl, data, success, error);

const signIn = (data, success, error) => httpService.post(signInUrl, data, success, error);

export default {
  signUp,
  signIn,
};
