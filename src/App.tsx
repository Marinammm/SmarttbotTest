import React, { FC } from 'react';
import Menu from 'components/structure/Menu/Menu';
import * as S from './App.styles';

const App: FC = () => (
  <S.Background>
    <Menu />
  </S.Background>
);

export default App;
