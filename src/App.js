import React from "react";
import { Route, Switch } from "react-router-dom";
import Assignments from "./components/Assignments";
import Choices from "./components/Choices";
import Classnotes from "./components/Classnotes";
import Login from "./components/Login";
import "./App.css";
import NT_PANEL from "./components/panels/NT_PANEL";
import NT_TASK_PANEL from "./components/panels/NT_TASK_PANEL";
import ES_PANEL from "./components/panels/ES_PANEL";
import ES_TASK_PANEL from "./components/panels/ES_TASK_PANEL";
import ED_PANEL from "./components/panels/ED_PANEL";
import ED_TASK_PANEL from "./components/panels/ED_TASK_PANEL";
import SS_PANEL from "./components/panels/SS_PANEL";
import SS_TASK_PANEL from "./components/panels/SS_TASK_PANEL";
import DSD_PANEL from "./components/panels/DSD_PANEL";
import DSD_TASK_PANEL from "./components/panels/DSD_TASK_PANEL";
import DSA_PANEL from "./components/panels/DSA_PANEL";
import DSA_TASK_PANEL from "./components/panels/DSA_TASK_PANEL";
import MATH_PANEL from "./components/panels/MATH_PANEL";
import MATH_TASK_PANEL from "./components/panels/MATH_TASK_PANEL";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/choices">
          <Choices />
        </Route>

        <Route path="/classnotes">
          <Classnotes />
        </Route>

        <Route path="/assignments">
          <Assignments />
        </Route>

        <Route path="/NT_PANEL">
          <NT_PANEL />
        </Route>

        <Route path="/NT_TASK_PANEL">
          <NT_TASK_PANEL />
        </Route>

        <Route path="/ES_PANEL">
          <ES_PANEL />
        </Route>

        <Route path="/ES_TASK_PANEL">
          <ES_TASK_PANEL />
        </Route>

        <Route path="/ED_PANEL">
          <ED_PANEL />
        </Route>

        <Route path="/ED_TASK_PANEL">
          <ED_TASK_PANEL />
        </Route>

        <Route path="/SS_PANEL">
          <SS_PANEL />
        </Route>

        <Route path="/SS_TASK_PANEL">
          <SS_TASK_PANEL />
        </Route>

        <Route path="/DSD_PANEL">
          <DSD_PANEL />
        </Route>

        <Route path="/DSD_TASK_PANEL">
          <DSD_TASK_PANEL />
        </Route>

        <Route path="/DSA_PANEL">
          <DSA_PANEL />
        </Route>

        <Route path="/DSA_TASK_PANEL">
          <DSA_TASK_PANEL />
        </Route>

        <Route path="/MATH_PANEL">
          <MATH_PANEL />
        </Route>

        <Route path="/MATH_TASK_PANEL">
          <MATH_TASK_PANEL />
        </Route>
      </Switch>
    </>
  );
};

export default App;
