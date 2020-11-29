import React, { useReducer } from "react";

const handleLogin = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "hammer" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

const loginReducer = (state, action) => {
  console.log("action", action);
  console.log("[action.fieldName]", [action.fieldName]);

  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: ""
      };
    }
    case "logOut": {
      return {
        ...state,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

const iState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false
};

export default function LoginUseReducer() {
  const [
    { username, password, isLoading, error, isLoggedIn },
    dispatch
  ] = useReducer(loginReducer, iState);

  const onSubmit = async e => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await handleLogin({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: "logOut" })}>
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={e =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.currentTarget.value
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={e =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.currentTarget.value
                })
              }
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
