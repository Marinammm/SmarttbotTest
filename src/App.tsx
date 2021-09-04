import React, { FC } from 'react';
import Menu from 'components/structure/Menu/Menu';
import GeneralAnalysis from 'pages/GeneralAnalysis/GeneralAnalysis';
import * as S from './App.styles';

const App: FC = () => (
  <S.Background>
    <Menu />
    <S.PageWrapper>
      <GeneralAnalysis />
    </S.PageWrapper>
  </S.Background>
);

export default App;
