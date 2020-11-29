import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";

const GET_OWN = gql`
  query userToken($token: String!) {
    userToken(token: $token) {
      username
      email
    }
  }
`;

const RESET_PASSWORD = gql`
  mutation resetPassword(
    $email: String!
    $oldPassword: String!
    $newPassword: String!
  ) {
    resetPassword(
      email: $email
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
      isSuccess
    }
  }
`;

export default () => {
  const alert = useAlert();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [oldPasswordValid, setOldPasswordValid] = useState(false);
  const [newPasswordValid, setNewPasswordValid] = useState(false);

  const [oldPasswordCheck, setOldPasswordCheck] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");

  const { loading, error: errorQ } = useQuery(GET_OWN, {
    variables: { token: localStorage.getItem("token") },
    onCompleted({ userToken }) {
      console.log("userToken", userToken);
      const { email, username } = userToken;
      setUsername(username);
      setEmail(email);
    }
  });

  const [resetPassword, { loading: Loading, error: errorM }] = useMutation(
    RESET_PASSWORD,
    {
      onCompleted({ resetPassword }) {
        const { isSuccess, message } = resetPassword;
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
      case "oldPassword":
        setOldPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      default:
        break;
    }
    fieldValidator(name, value);
  };

  const fieldValidator = (fieldName, value) => {
    switch (fieldName) {
      case "oldPassword":
        if (
          value.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/
          )
        ) {
          setOldPasswordValid(true);
          setOldPasswordCheck("Correct!!!!");
        } else {
          setOldPasswordValid(false);
          setOldPasswordCheck(
            "At leaset one A-Z, a-z, 0-9, and special character. At least 8 characters"
          );
        }
        break;
      case "newPassword":
        if (
          value.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/
          )
        ) {
          setNewPasswordValid(true);
          setNewPasswordCheck("Correct!!!!");
        } else {
          setNewPasswordValid(false);
          setNewPasswordCheck(
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
    if (!oldPassword || !newPassword) {
      alert("No Password");
      return;
    }

    resetPassword({
      variables: {
        email: email,
        oldPassword: oldPassword,
        newPassword: newPassword
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
      <h1 className="text-center mt-5">{LangInput("reset_password_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <form onSubmit={submitHandler}>
        <div className="form-group mt-2">
          <label>{LangInput("username")}</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            disabled
          />
        </div>
        <div className={`form-group mt-2 ${extraLabel(oldPasswordValid)}`}>
          <label>{LangInput("old_password")}</label>
          <input
            className={`form-control ${extraInput(oldPasswordValid)}`}
            type="password"
            placeholder="Enter Old Password"
            name="oldPassword"
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(oldPasswordValid)}`}>
            {oldPasswordCheck}
          </h4>
        </div>
        <div className={`form-group mt-2 ${extraLabel(newPasswordValid)}`}>
          <label>{LangInput("new_password")}</label>
          <input
            className={`form-control ${extraInput(newPasswordValid)}`}
            type="password"
            placeholder="Enter your New Password"
            name="newPassword"
            onChange={inputHandler}
          />
          <h4 className={`form-text ${extraText(newPasswordValid)}`}>
            {newPasswordCheck}
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
