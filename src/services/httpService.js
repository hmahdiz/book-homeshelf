import axios from "axios";

const get = async (url, restParams) => templateHttpCall({ method: "get", url }, restParams);
const post = async (url, data, restParams) => templateHttpCall({ method: "post", url, data }, restParams);
const put = async (url, data, restParams) => templateHttpCall({ method: "put", url, data }, restParams);
const httpDelete = async (url, data, restParams) => templateHttpCall({ method: "delete", url, data }, restParams);

async function templateHttpCall(paramsOption, { requestFunc, successFunc, errorFunc }) {
  try {
    requestFunc && requestFunc();
    const result = await axios(paramsOption);
    successFunc && successFunc(result.data);
  } catch (err) {
    console.error("(home-bookshelf) An error has occured: ", err);
    errorFunc && errorFunc(err);
  }
}

export default {
  get,
  post,
  put,
  delete: httpDelete,
};
