import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import React from "react";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LangContextProvider from "./Lang";
import Auth from "./pages/Auth";
import CreateFactory from "./pages/CreateFactory";
import FindFactories from "./pages/FindFactories";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import SearchFactory from "./pages/SearchFactory";
import SearchUser from "./pages/SearchUser";
import ShowFactories from "./pages/ShowFactories";
import ShowUsers from "./pages/ShowUsers";
import SystemLog from "./pages/SystemLog";
import UpdateAnalysis from "./pages/UpdateAnalysis";
import UpdateFactory from "./pages/UpdateFactory";
import UpdateUser from "./pages/UpdateUser";

const options = {
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "30px",
  transition: transitions.FADE,
  containerStyle: {}
};


const cache = new InMemoryCache();


const client = new ApolloClient({
  cache,
  link: new createHttpLink({
    uri: "http://localhost:4000",
    headers: { authorization: localStorage.getItem("token") }
  })
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});

const IsLoggedIn = () => {
  const { data } = useQuery(gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `);
  return data.isLoggedIn ? (
    <App />
  ) : (
    <LangContextProvider>
      <Auth />
    </LangContextProvider>
  );
};

const Main = () => (
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>
);

const App = () => (
  <ApolloProvider client={client}>
    <AlertProvider template={AlertTemplate} {...options}>
      <LangContextProvider>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/find-factories" component={FindFactories} />
            <Route path="/search-user" component={SearchUser} />
            <Route path="/show-users" component={ShowUsers} />
            <Route path="/update-user" component={UpdateUser} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/search-factory" component={SearchFactory} />
            <Route path="/show-factories" component={ShowFactories} />
            <Route path="/create-factory" component={CreateFactory} />
            <Route path="/update-factory" component={UpdateFactory} />
            <Route path="/update-analysis" component={UpdateAnalysis} />
            <Route path="/system-log" component={SystemLog} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
        <Footer />
      </LangContextProvider>
    </AlertProvider>
  </ApolloProvider>
);

render(Main(), document.getElementById("root"));
