import apiCall from "../api/apiCall";

const actionTypes = {
  GetAllBooks: "GET_ALL_BOOKS",
  GetById: "GET_BY_ID",
  UpdateBook: "UPDATE_BOOK",
  DeleteBook: "DELETE_BOOK",
  Error: "ERROR",
};

export async function getAll() {
  return await apiCall.getBooks({
    success: (books) => ({ type: actionTypes.GetAllBooks, payload: { books } }),
    error: (err) => ({ type: actionTypes.Error, payload: err }),
  });
}

export async function getById(id) {
  return await apiCall.getBookById({
    id,
    success: (book) => ({ type: actionTypes.GetById, payload: { book } }),
  });
}

export async function update(book) {
  return await apiCall.updateBook({
    book,
    success: (book) => ({ type: actionTypes.GetById, payload: { book } }),
  });
}

export async function deleteBook(bookId) {
  return await apiCall.deleteBook({
    bookId,
    success: () => ({ type: actionTypes.DeleteBook, payload: { bookId } }),
    error: (error) => ({ type: actionTypes.Error, payload: { error: error.message } }),
  });
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GetAllBooks:
      return { ...state, all: action.payload.books, error: "" };
    case actionTypes.GetById:
      return { ...state, byId: action.payload.book };
    case actionTypes.DeleteBook:
      const all = state.all.filter((b) => b.id !== action.payload.bookId);
      return { ...state, all };
    case actionTypes.Error:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
