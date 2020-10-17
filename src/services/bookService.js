import { apiUrl } from "../config.json";
import httpService from "./httpService";

const booksUrl = apiUrl + "books";
const booksUrlWithParams = apiUrl + "books/";

const getAll = async (success, error) => httpService.get(booksUrl, success, error);
const getById = async (id, success, error) => httpService.get(booksUrlWithParams + id, success, error);
const save = async (book, success, error) => httpService.post(booksUrl, book, success, error);
const update = async (book, success, error) => httpService.put(booksUrl, book, success, error);
const deleteBook = async (bookId, successFunc, errorFunc) =>
  httpService.delete(booksUrl, { bookId }, successFunc, errorFunc);

export default {
  getAll,
  getById,
  save,
  update,
  delete: deleteBook,
};
