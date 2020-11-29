import React, { useContext } from "react";
import { UserContext } from "../../index";

const login = async () => {
  return {
    id: 4,
    username: "bob",
    email: "bob@bob.com"
  };
};
const UseContent = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </>
  );
};

export default UseContent;
