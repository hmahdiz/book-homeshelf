import bookService from "../../services/bookService";

const actionTypes = {
  GetAllBooks: "GET_ALL_BOOKS",
  GetById: "GET_BY_ID",
  AddBook: "ADD_BOOK",
  UpdateBook: "UPDATE_BOOK",
  DeleteBook: "DELETE_BOOK",
  Error: "ERROR",
};

export async function getAll() {
  return await bookService.getAll(
    (books) => ({ type: actionTypes.GetAllBooks, payload: { books } }),
    (err) => ({ type: actionTypes.Error, payload: err })
  );
}

export async function getById(id) {
  return await bookService.getById(
    id,
    (book) => ({ type: actionTypes.GetById, payload: { book } }),
    (error) => ({ type: actionTypes.Error, payload: { error: error.message } })
  );
}

export async function save(book) {
  return await bookService.save(
    book,
    (savedBook) => ({ type: actionTypes.AddBook, payload: { savedBook } }),
    (error) => ({ type: actionTypes.Error, payload: { error: error.message } })
  );
}

export async function update(book) {
  return await bookService.update(
    book,
    (book) => ({ type: actionTypes.GetById, payload: { book } }),
    (error) => ({ type: actionTypes.Error, payload: { error: error.message } })
  );
}

export async function deleteBook(bookId) {
  return await bookService.delete(
    bookId,
    () => ({ type: actionTypes.DeleteBook, payload: { bookId } }),
    (error) => ({ type: actionTypes.Error, payload: { error: error.message } })
  );
}

export default function reducer(state = { all: [] }, action) {
  switch (action.type) {
    case actionTypes.GetAllBooks:
      return { ...state, all: [...action.payload.books], error: "" };
    case actionTypes.AddBook:
      return {
        ...state,
        all: [...state.all, action.payload.savedBook],
        byId: { ...action.payload.savedBook },
        error: "",
      };
    case actionTypes.GetById:
      return { ...state, byId: { ...action.payload.book } };
    case actionTypes.DeleteBook:
      const all = state.all.filter((b) => b.id !== action.payload.bookId);
      return { ...state, all };
    case actionTypes.Error:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
