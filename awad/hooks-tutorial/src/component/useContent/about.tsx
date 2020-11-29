import React, { useContext } from "react";
import { UserContext } from "../../index";

const About = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setUser("hihihihi")}>change value</button>
    </>
  );
};

export default About;
