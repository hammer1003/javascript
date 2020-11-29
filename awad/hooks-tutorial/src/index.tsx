import React, { createContext, Dispatch, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClosureProblem from "./component/closureProblem";
import FormArray from "./component/formArray";
import OptimizeRenders from "./component/optimizeRenders";
import UseCallback from "./component/useCallback";
import UseContent from "./component/useContent";
import About from "./component/useContent/about";
import UseEffect from "./component/useEffect";
import UseLayoutEffect from "./component/useLayoutEffect";
import UseMemo from "./component/useMemo";
import UseReducer from "./component/useReducer";
import UseRef from "./component/useRef";
import UseState from "./component/useState";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

interface IUser {
  id: number;
  username: string;
  email: string;
}

interface IValue {
  user: IUser;
  setUser: Dispatch<any>;
}

export const UserContext = createContext({} as IValue);

const Main: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <BrowserRouter>
      <Switch>
        <Route excat path="/usestate" component={UseState} />
        <Route excat path="/useeffect" component={UseEffect} />
        <Route excat path="/useref" component={UseRef} />
        <Route excat path="/uselayouteffect" component={UseLayoutEffect} />
        <Route excat path="/usecallback" component={UseCallback} />
        <Route excat path="/usememo" component={UseMemo} />
        <Route excat path="/usereducer" component={UseReducer} />
        <Route excat path="/closureproblem" component={ClosureProblem} />
        <Route excat path="/optimizerenders" component={OptimizeRenders} />
        <Route excat path="/formarray" component={FormArray} />
        <UserContext.Provider value={value}>
          <Route excat path="/usecontent" component={UseContent} />
          <Route excat path="/about" component={About} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
