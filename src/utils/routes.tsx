import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory } from 'history';
import Menu from 'components/structure/Menu/Menu';
import MenuMobile from 'components/structure/MenuMobile/MenuMobile';
import GeneralAnalysis from 'pages/GeneralAnalysis/GeneralAnalysis';
import CreateRobot from 'pages/CreateRobot/CreateRobot';
import { PageWrapper } from './global.styles';

export const history = createHashHistory();

const Routes: FC = () => (
  <ConnectedRouter history={history}>
    <Menu />
    <MenuMobile />
    <PageWrapper>
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
    </PageWrapper>
  </ConnectedRouter>
);

export default Routes;
