import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import LangInput from "./LangInput";

const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      message
      isSuccess
    }
  }
`;

export default () => {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOG_IN, {
    onCompleted({ login }) {
      const { isSuccess, message } = login;
      if (isSuccess) {
        localStorage.setItem("token", message);
        client.writeData({ data: { isLoggedIn: true } });
      }
      if (!isSuccess) {
        alert(message);
        window.location.reload(false);
      }
    }
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = e => {
    e.preventDefault();
    if (!email) {
      alert("No Email");
      return;
    }
    if (!password) {
      alert("No Password");
      return;
    }
    login({
      variables: {
        email: email,
        password: password
      }
    });
  };
  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group mt-2">
          <label> {LangInput("email")}</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <small className="form-text text-muted">
            {LangInput("login_note")}
          </small>
        </div>
        <div className="form-group mt-2">
          <label> {LangInput("password")}</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <small className="form-text text-muted">
            {LangInput("login_note")}
          </small>
        </div>
        <button type="submit" className="btn btn-outline-info w-100">
          {LangInput("submit")}
        </button>
      </form>
    </div>
  );
};
