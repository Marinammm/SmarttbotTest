import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Menu from 'components/structure/Menu/Menu';
import GeneralAnalysis from 'pages/GeneralAnalysis/GeneralAnalysis';
import { ThemeProvider } from 'styled-components';
import store from './store';
import * as S from './App.styles';
import theme from './utils/theme';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <S.Background>
        <Menu />
        <S.PageWrapper>
          <GeneralAnalysis />
        </S.PageWrapper>
      </S.Background>
    </ThemeProvider>
  </Provider>
);

export default App;
