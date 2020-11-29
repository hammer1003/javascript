import React, { Component, createContext } from "react";

export const ThemeContext = createContext({} as IThemeContext);

interface IThemeContext {
  isLightTheme: boolean;
  light: {
    syntax: string;
    ui: string;
    bg: string;
  };
  dark: {
    syntax: string;
    ui: string;
    bg: string;
  };
  toggleTheme: () => void;
}

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee"
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#eee"
    }
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
