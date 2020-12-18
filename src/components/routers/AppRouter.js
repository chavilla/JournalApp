import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import JournalScreen from "../journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
      <Router>
          <div>
            <Switch>
                <Route path="/auth" component={ AuthRouter } />
                <Route exact path="/journal" component={JournalScreen} />
                <Redirect to='/auth/login' />
            </Switch>
          </div>
      </Router>
  );
};

export default AppRouter;
