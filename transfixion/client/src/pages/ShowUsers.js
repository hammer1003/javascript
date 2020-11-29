import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import LangInput from "../components/LangInput";

const USERS = gql`
  query users {
    users {
      id
      username
      email
      position
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(USERS);

  if (loading) return <p>Loading......</p>;
  if (error) return <p>An error occurred</p>;
  if (data) console.log("data", data);

  return (
    <div
      className="container mb-5 py-5"
      style={window.innerWidth > 490 ? { marginTop: 180 } : { marginTop: 214 }}
    >
      <h1 className="text-center mt-5">{LangInput("show_users_page")}</h1>
      <p className="text-center">
        <small className="text-muted">{LangInput("company_name")}</small>
      </p>
      <table className="table table-hover table-borderless mb-5 py-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> {LangInput("username")}</th>
            <th scope="col"> {LangInput("email")}</th>
            <th scope="col"> {LangInput("position")}</th>
          </tr>
        </thead>
        <tbody>
          {data && data.users ? (
            data.users.map(user => (
              <tr key={user.id}>
                <th>{user.username}</th>
                <th>{user.email}</th>
                <th>{user.position}</th>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
