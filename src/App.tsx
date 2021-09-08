import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Menu from 'components/structure/Menu/Menu';
import GeneralAnalysis from 'pages/GeneralAnalysis/GeneralAnalysis';
import store from './store';
import * as S from './App.styles';

const App: FC = () => (
  <Provider store={store}>
    <S.Background>
      <Menu />
      <S.PageWrapper>
        <GeneralAnalysis />
      </S.PageWrapper>
    </S.Background>
  </Provider>
);

export default App;
