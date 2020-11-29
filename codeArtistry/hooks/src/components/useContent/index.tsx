import React, { createContext, useContext, useState } from "react";
import "./styles.css";

const UserContext = createContext({} as IName);

interface IName {
  firstName: string;
  lastName: string;
}

const UseContent = () => {
  const [firstName, setFirstName] = useState<string>("Dave");
  const [lastName, setLastName] = useState<string>("Thomas");
  return (
    <UserContext.Provider value={{ firstName, lastName }}>
      <Content />
    </UserContext.Provider>
  );
};

const Bar = () => {
  const { firstName, lastName } = useContext<IName>(UserContext);

  return (
    <nav>
      <span className="title">Cool App</span>
      <span>
        Hello, {firstName} {lastName}!
      </span>
    </nav>
  );
};

const Content = () => {
  const { firstName, lastName } = useContext<IName>(UserContext);

  return (
    <>
      <Bar />
      <main>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          aspernatur quos minima, fuga quidem harum consequatur tempora animi
          omnis laborum tenetur, quod dignissimos quis. Ea optio eos expedita
          earum excepturi.
        </p>
      </main>
    </>
  );
};

export default UseContent;
