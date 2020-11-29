import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";

const GET_OWN = gql`
  query userToken($token: String!) {
    userToken(token: $token) {
      email
      username
      position
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser(
    $username: String!
    $position: String
    $oldEmail: String!
    $newEmail: String!
    $password: String!
  ) {
    updateUser(
      username: $username
      position: $position
      oldEmail: $oldEmail
      newEmail: $newEmail
      password: $password
    ) {
      message
      isSuccess
    }
  }
`;

export default () => {
  const alert = useAlert();

  const [username, setUsername] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");

  const [usernameValid, setUsernameValid] = useState(true);
  const [newEmailValid, setNewEmailValid] = useState(true);
  const [positionValid, setPositionValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);

  const [usernameCheck, setUsernameCheck] = useState("");
  const [newEmailCheck, setNewEmailCheck] = useState("");
  const [positionCheck, setPositionCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const { loading, error: errorQ } = useQuery(GET_OWN, {
    variables: { token: localStorage.getItem("token") },
    onCompleted({ userToken }) {
      console.log("userToken", userToken);
      const { email, username, position } = userToken;
      setUsername(username);
      setOldEmail(email);
      setNewEmail(email);
      setPosition(position);
    }
  });

  const [updateUser, { loading: Loading, error: errorM }] = useMutation(
    UPDATE_USER,
    {
      onCompleted({ updateUser }) {
        const { isSuccess, message } = updateUser;
        if (!isSuccess)
          alert.show(message, {
            type: "error"
          });
        if (isSuccess)
          alert.show(message, {
            type: "success"
          });

        setTimeout(() => window.location.reload(), 5000);
      }
    }
  );

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "newEmail":
        setNewEmail(value);
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
          setUsernameCheck("At Least one Character");
        }
        break;
      case "newEmail":
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          setNewEmailValid(true);
          setNewEmailCheck("Correct!!!!");
        } else {
          setNewEmailValid(false);
          setNewEmailCheck("Incorrect Email Form. Note:example@abc.cde");
        }
        break;
      case "position":
        if (value.length > 0) {
          setPositionValid(true);
          setPositionCheck("Correct!!!!");
        } else {
          setPositionValid(false);
          setPositionCheck("At Least one Character");
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
    if (!newEmail) {
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
    updateUser({
      variables: {
        username: username,
        oldEmail: oldEmail,
        newEmail: newEmail,
        position: position,
        password: password
      }
    });
  };

  if (Loading) return <p>(mutation)loading......</p>;
  if (errorM) return <p>(mutation)An error occurred</p>;

  if (loading) return <p>(query)loading......</p>;
  if (errorQ) return <p>(query)An error occurred</p>;

  return (
    <div
      className="container mb-5 py-5"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("update_users_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <form onSubmit={submitHandler}>
        <div className={`form-group mt-2 ${extraLabel(usernameValid)}`}>
          <label>{LangInput("username")}</label>
          <input
            className={`form-control ${extraInput(usernameValid)}`}
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(usernameValid)}`}>
            {usernameCheck}
          </h4>
        </div>
        <div className={`form-group mt-2 ${extraLabel(newEmailValid)}`}>
          <label>{LangInput("email")}</label>
          <input
            className={`form-control ${extraInput(newEmailValid)}`}
            type="email"
            placeholder="Enter Email Address"
            name="newEmail"
            value={newEmail}
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(newEmailValid)}`}>
            {newEmailCheck}
          </h4>
        </div>
        <div className={`form-group mt-2 ${extraLabel(positionValid)}`}>
          <label>{LangInput("position")}</label>
          <input
            className={`form-control ${extraInput(positionValid)}`}
            type="text"
            placeholder="Enter Position"
            name="position"
            value={position}
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(positionValid)}`}>
            {positionCheck}
          </h4>
        </div>
        <div className={`form-group mt-2 ${extraLabel(passwordValid)}`}>
          <label>{LangInput("comfirm_password")}</label>
          <input
            className={`form-control ${extraInput(passwordValid)}`}
            type="password"
            placeholder="Enter your old password"
            name="password"
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(passwordValid)}`}>
            {passwordCheck}
          </h4>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-outline-info mx-auto w-25">
            {LangInput("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};
