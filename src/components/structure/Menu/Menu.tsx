import React, { FC } from 'react';
import logo from 'assets/images/logo.png';
import sinal from 'assets/images/sinal.png';
import { history } from 'utils/routes';
import * as S from './Menu.styles';

const Menu: FC = () => (
  <S.Wrapper>
    <img src={logo} alt="logo" />
    <S.Divisor />
    <S.MenuItem onClick={() => history.push('/analise-geral')}>
      <img src={sinal} alt="icon" />
      <span>Análise geral</span>
    </S.MenuItem>
  </S.Wrapper>
);

export default Menu;
