import React, { FC } from 'react';
import Card from 'components/structure/Card/Card';
import SwitchInput from 'components/form/SwitchInput/SwitchInput';
import sinal from 'assets/images/sinal.png';
import * as S from './Title.styles';

type TitleProps = {
  mode: number;
  setMode: any;
};

const Title: FC<TitleProps> = ({ mode, setMode }: TitleProps) => (
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

export default Title;
