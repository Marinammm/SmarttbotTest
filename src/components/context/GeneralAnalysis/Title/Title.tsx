import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'components/structure/Card/Card';
import SwitchInput from 'components/form/SwitchInput/SwitchInput';
import sinal from 'assets/images/sinal.png';
import { getRobotsList } from 'store/robotsList/robotsList.useCases';
import { changeMode } from 'store/robotsList/robotsList.actions';
import * as S from './Title.styles';

const Title: FC = () => {
  const [mode, setMode] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeMode(mode));
    dispatch(getRobotsList(mode));
  }, [mode]);

  return (
    <Card>
      <S.Content>
        <S.Description>
          <img src={sinal} alt="icon" />
          <S.Divisor />
          <span>Análise Geral</span>
          <span>&nbsp;/&nbsp;</span>
          <span>Principal</span>
        </S.Description>
        <SwitchInput
          option1="Modo simulado"
          option2="Modo real"
          checked={!!mode}
          onChange={() => setMode(Math.abs(mode - 1))}
        />
      </S.Content>
    </Card>
  );
};

export default Title;
