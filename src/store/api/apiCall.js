import axios from "axios";

const baseUrl = "http://localhost:8000/api/";
const booksUrl = baseUrl + "books";
const booksUrlWithParams = baseUrl + "books/";
const authorsUrl = baseUrl + "authors";

async function getBooks({ success, error }) {
  try {
    const result = await axios.get(booksUrl);
    return success(result.data);
  } catch (err) {
    error(err);
  }
}

async function getBookById({ id, success }) {
  try {
    const result = await axios.get(booksUrlWithParams + id);
    return success(result.data);
  } catch (error) {}
}

async function updateBook({ book, success }) {
  try {
    const result = await axios({ method: "put", url: booksUrl, data: book });
    return success(result.data);
  } catch (error) {}
}

async function deleteBook({ bookId, success, error }) {
  try {
    await axios({ method: "delete", url: booksUrl, data: { bookId } });
    return success();
  } catch (err) {
    return error(err);
  }
}

async function getAuthors(success, error) {
  try {
    const result = await axios.get(authorsUrl);
    return success(result.data);
  } catch (err) {
    error(err);
  }
}

export default {
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  getAuthors,
};
