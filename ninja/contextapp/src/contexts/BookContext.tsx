import React, { createContext, useState } from "react";

export const BookContext = createContext<IBookContext[]>({} as IBookContext[]);

export interface IBookContext {
  title: string;
  id: number;
}

const BookContextProvider = (props: any) => {
  const [books, setBooks] = useState<IBookContext[]>([
    { title: "name of the wind", id: 1 },
    { title: "the way of kings", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the hero of ages", id: 4 }
  ]);
  return (
    <BookContext.Provider value={books}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
