import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Menu from 'components/structure/Menu/Menu';
import { ThemeProvider } from 'styled-components';
import Routes from './utils/routes';
import store from './store';
import * as S from './App.styles';
import theme from './utils/theme';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <S.Background>
        <Menu />
        <S.PageWrapper>
          <Routes />
        </S.PageWrapper>
      </S.Background>
    </ThemeProvider>
  </Provider>
);

export default App;
