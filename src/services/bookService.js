import { apiUrl } from "../config.json";
import httpService from "./httpService";

const booksUrl = apiUrl + "books";
const booksUrlWithParams = apiUrl + "books/";

const getAll = async ({ searchedBook, ...restParams }) =>
  httpService.get(`${booksUrl}${searchedBook ? "?searchedBook=" + searchedBook : ""}`, restParams);
const getById = async ({ id, ...restParams }) => httpService.get(booksUrlWithParams + id, restParams);
const save = async ({ book, ...restParams }) => httpService.post(booksUrl, book, restParams);
const update = async ({ book, ...restParams }) => httpService.put(booksUrl, book, restParams);
const deleteBook = async ({ bookId, ...restParams }) => httpService.delete(booksUrl, { bookId }, restParams);

export default {
  getAll,
  getById,
  save,
  update,
  delete: deleteBook,
};
