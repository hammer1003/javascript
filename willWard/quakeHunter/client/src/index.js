import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import React from "react";
import { render } from "react-dom";
import "./index.css";
import Login from "./pages/Login";
import Quakes from "./Quakes";
import { resolvers, typeDefs } from "./schema";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const IsLoggedIn = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Quakes /> : <Login />;
};

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/",
  headers: { authorization: localStorage.getItem("token") }
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});

render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>,
  document.getElementById("root")
);