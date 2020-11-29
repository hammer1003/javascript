import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import LangInput from "../components/LangInput";

const GET_USER = gql`
  mutation user($email: String!) {
    user(email: $email) {
      message
      isSuccess
      userInfo {
        username
        email
        position
      }
    }
  }
`;

export default () => {
  const alert = useAlert();
  const [email, setEmail] = useState("");

  const [data, setData] = useState();

  const [user, { loading, error }] = useMutation(GET_USER, {
    onCompleted({ user }) {
      const { message, isSuccess, userInfo } = user;

      if (!isSuccess) {
        alert.show(message, {
          type: "error"
        });
        setTimeout(() => window.location.reload(), 5000);
      }
      if (isSuccess) {
        setData(userInfo);
      }
    }
  });

  const searchHandler = e => {
    e.preventDefault();
    if (!email) {
      alert.show("Please type your Email!!!", { type: "error" });
      return;
    }
    user({
      variables: {
        email: email
      }
    });
  };

  if (loading) return <p>Loading......</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div
      className="container mb-5 py-5"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("search_user_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <form onSubmit={searchHandler}>
        <div className="row">
          <div className="form-group col-md-9">
            <input
              className="form-control form-control-underlined"
              type="email"
              placeholder="Enter Email Address: "
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <button
              className="btn btn-primary rounded-pill btn-block shadow-sm"
              type="submit"
            >
              {LangInput("search")}
            </button>
          </div>
        </div>
      </form>
      <table className="table table-hover table-borderless mb-5 py-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> {LangInput("username")}</th>
            <th scope="col"> {LangInput("email")}</th>
            <th scope="col"> {LangInput("position")}</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            <tr>
              <th>{data.username}</th>
              <th>{data.email}</th>
              <th>{data.position}</th>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
