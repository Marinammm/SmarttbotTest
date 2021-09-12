import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory } from 'history';
import GeneralAnalysis from 'pages/GeneralAnalysis/GeneralAnalysis';
import CreateRobot from 'pages/CreateRobot/CreateRobot';

export const history = createHashHistory();

const Routes: FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact
        path="/analise-geral"
        component={() => <GeneralAnalysis />}
      />
      <Route
        exact
        path="/criar-robo"
        component={() => <CreateRobot />}
      />
      <Route exact path="/">
        <Redirect to="/analise-geral" />
      </Route>
    </Switch>
  </ConnectedRouter>
);

export default Routes;
