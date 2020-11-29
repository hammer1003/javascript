import React, { Component, createContext } from "react";

export const AuthContext = createContext({} as IAuthContext);

interface IAuthContext {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };
  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
