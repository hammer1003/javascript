import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import LoginForm from "../components/LoginForm";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function Login() {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      console.log("front token", login);
      localStorage.setItem("token", login);
      if (login) client.writeData({ data: { isLoggedIn: true } });
    }
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <p>ERROR</p>;
  return (
    <div>
      <LoginForm login={login} />
    </div>
  );
}
