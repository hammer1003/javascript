import React, { useState } from "react";
import "./components.css";

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = e => {
    e.preventDefault();

    login({
      variables: {
        email: email,
        password: password
      }
    });
  };

  return (
    <div className="loginform">
      <h1>Log In</h1>
      <form className="form-group" onSubmit={submitHandler}>
        <label htmlFor="email">
          Email
          <input
            type="text"
            placeholder="Enter email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input className="btn" type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default LoginForm;
