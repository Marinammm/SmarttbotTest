import React, { FC } from 'react';
import Title from 'components/context/GeneralAnalysis/Title/Title';
import Overview from 'components/context/GeneralAnalysis/Overview/Overview';
import * as S from './GeneralAnalysis.styles';

const GeneralAnalysis: FC = () => (
  <S.Wrapper>
    <Title />
    <Overview />
  </S.Wrapper>
);

export default GeneralAnalysis;
