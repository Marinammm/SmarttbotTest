import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'components/structure/Card/Card';
import sinal from 'assets/images/sinal.png';
import Switch from 'react-switch';
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
        <S.StyledSwitch>
          <S.Option isActive={!mode}>Modo Simulado</S.Option>
          <Switch
            checked={!!mode}
            onChange={() => setMode(Math.abs(mode - 1))}
            onColor="#00b39d"
            offColor="#098475"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={15}
          />
          <S.Option isActive={!!mode}>Modo Real</S.Option>
        </S.StyledSwitch>
      </S.Content>
    </Card>
  );
};

export default Title;
