import { IBook } from "../contexts/BookContext";

export const bookReducer = (state: IBook[], action: any) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: state.length
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
