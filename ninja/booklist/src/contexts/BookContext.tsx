import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext<IBookContext>({} as IBookContext);

export interface IBook {
  title: string;
  author: string;
  id: number;
}
interface IBookContext {
  books: IBook[];
  dispatch: any;
}

const BookContextProvider = (props: any) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
