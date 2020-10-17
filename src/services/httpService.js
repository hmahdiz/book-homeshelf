import axios from "axios";

const get = async (url, successFunc, errorFunc) => templateHttpCall(() => axios.get(url), successFunc, errorFunc);

const post = async (url, data, successFunc, errorFunc) =>
  templateHttpCall(() => axios.post(url, data), successFunc, errorFunc);

const put = async (url, data, successFunc, errorFunc) =>
  templateHttpCall(() => axios({ method: "put", url, data }), successFunc, errorFunc);

const httpDelete = async (url, data, successFunc, errorFunc) =>
  templateHttpCall(() => axios({ method: "delete", url, data }), successFunc, errorFunc);

async function templateHttpCall(apiCallFunc, successFunc, errorFunc) {
  try {
    const result = await apiCallFunc();
    return successFunc(result.data);
  } catch (err) {
    console.error("(home-bookshelf) An error has occured: ", err);
    return errorFunc(err);
  }
}

export default {
  get,
  post,
  put,
  delete: httpDelete,
};
