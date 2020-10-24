import bookService from "../../services/bookService";

const actionTypes = {
  Request: "REQUEST_BOOK",
  GetAllBooks: "GET_ALL_BOOKS",
  GetById: "GET_BY_ID",
  AddBook: "ADD_BOOK",
  UpdateBook: "UPDATE_BOOK",
  DeleteBook: "DELETE_BOOK",
  Error: "ERROR",
};

export const getAll = (searchedBook) => async (dispatch) => {
  await bookService.getAll({
    searchedBook,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (books) => dispatch({ type: actionTypes.GetAllBooks, payload: { books } }),
    errorFunc: (err) => dispatch({ type: actionTypes.Error, payload: err }),
  });
};

export const getById = (id) => async (dispatch) => {
  await bookService.getById({
    id,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (book) => dispatch({ type: actionTypes.GetById, payload: { book } }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export const save = (book) => async (dispatch) => {
  await bookService.save({
    book,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (savedBook) => dispatch({ type: actionTypes.AddBook, payload: { savedBook } }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export const update = (book) => async (dispatch) => {
  await bookService.update({
    book,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: (book) => dispatch({ type: actionTypes.GetById, payload: { book } }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export const deleteBook = (bookId) => async (dispatch) => {
  await bookService.delete({
    bookId,
    requestFunc: () => dispatch({ type: actionTypes.Request }),
    successFunc: () => dispatch({ type: actionTypes.DeleteBook, payload: { bookId } }),
    errorFunc: (error) => dispatch({ type: actionTypes.Error, payload: { error: error.message } }),
  });
};

export default function reducer(state = { all: [], error: "", loading: false }, action) {
  switch (action.type) {
    case actionTypes.Request:
      return { ...state, error: "", loading: true };

    case actionTypes.GetAllBooks:
      return { ...state, all: [...action.payload.books], error: "", loading: false };

    case actionTypes.AddBook:
      return {
        ...state,
        all: [...state.all, action.payload.savedBook],
        byId: { ...action.payload.savedBook },
        error: "",
        loading: false,
      };

    case actionTypes.GetById:
      return { ...state, byId: { ...action.payload.book }, error: "", loading: false };

    case actionTypes.DeleteBook:
      const all = state.all.filter((b) => b.id !== action.payload.bookId);
      return { ...state, all: [...all], error: "", loading: false };

    case actionTypes.Error:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}
