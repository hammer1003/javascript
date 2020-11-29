import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import LangInput from "./LangInput";

const REGISTRATION = gql`
  mutation registration(
    $username: String!
    $position: String
    $email: String!
    $password: String!
  ) {
    registration(
      username: $username
      position: $position
      email: $email
      password: $password
    ) {
      message
      isSuccess
    }
  }
`;

export default () => {
  const client = useApolloClient();
  const [registration, { loading, error }] = useMutation(REGISTRATION, {
    onCompleted({ registration }) {
      const { isSuccess, message } = registration;
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

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");

  const [usernameValid, setUsernameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [positionValid, setPositionValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [usernameCheck, setUsernameCheck] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [positionCheck, setPositionCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    fieldValidator(name, value);
  };

  const fieldValidator = (fieldName, value) => {
    switch (fieldName) {
      case "username":
        if (value.length > 0) {
          setUsernameValid(true);
          setUsernameCheck("Correct!!!!");
        } else {
          setUsernameValid(false);
          setUsernameCheck("At least one Character");
        }
        break;
      case "email":
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          setEmailValid(true);
          setEmailCheck("Correct!!!!");
        } else {
          setEmailValid(false);
          setEmailCheck("Incorrect Email Form. Note:example@abc.cde");
        }
        break;
      case "position":
        if (value.length > 0) {
          setPositionValid(true);
          setPositionCheck("Correct!!!!");
        } else {
          setPositionValid(false);
          setPositionCheck("At least one Character");
        }
        break;
      case "password":
        if (
          value.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/
          )
        ) {
          setPasswordValid(true);
          setPasswordCheck("Correct!!!!");
        } else {
          setPasswordValid(false);
          setPasswordCheck(
            "At leaset one A-Z, a-z, 0-9, and special character. At least 8 characters"
          );
        }
        break;
      default:
        break;
    }
  };

  const extraLabel = validator => (validator ? "text-success" : "text-danger");
  const extraInput = validator =>
    validator ? "border border-success" : "border border-danger";
  const extraText = validator => (validator ? " text-success" : "text-danger");

  const submitHandler = e => {
    e.preventDefault();
    if (!username) {
      alert("No Username");
      return;
    }
    if (!email) {
      alert("No Email");
      return;
    }
    if (!position) {
      alert("No Position");
      return;
    }
    if (!password) {
      alert("No Password");
      return;
    }
    registration({
      variables: {
        username: username,
        email: email,
        position: position,
        password: password
      }
    });
  };
  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className={`form-group mt-2 ${extraLabel(usernameValid)}`}>
          <label>{LangInput("username")}</label>
          <input
            className={`form-control ${extraInput(usernameValid)}`}
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(usernameValid)}`}>
            {usernameCheck}
          </h4>
        </div>
        <div className={`form-group mt-2 ${extraLabel(emailValid)}`}>
          <label>{LangInput("email")}</label>
          <input
            className={`form-control ${extraInput(emailValid)}`}
            type="email"
            placeholder="Enter Email Address"
            name="email"
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(emailValid)}`}>{emailCheck}</h4>
        </div>
        <div className={`form-group mt-2 ${extraLabel(positionValid)}`}>
          <label>{LangInput("position")}</label>
          <input
            className={`form-control ${extraInput(positionValid)}`}
            type="text"
            placeholder="Enter Position"
            name="position"
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(positionValid)}`}>
            {positionCheck}
          </h4>
        </div>
        <div className={`form-group mt-2 ${extraLabel(passwordValid)}`}>
          <label>{LangInput("password")}</label>
          <input
            className={`form-control ${extraInput(passwordValid)}`}
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(passwordValid)}`}>
            {passwordCheck}
          </h4>
        </div>
        <button type="submit" className="btn btn-outline-info w-100">
          {LangInput("submit")}
        </button>
      </form>
    </div>
  );
};
