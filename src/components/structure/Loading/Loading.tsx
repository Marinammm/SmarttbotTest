import React, { FC } from 'react';
import ReactLoading from 'react-loading';
import * as S from './Loading.styles';

const Loading: FC = () => (
  <S.LoadingContainer>
    <ReactLoading type="spinningBubbles" color="#00b39d" />
  </S.LoadingContainer>
);

export default Loading;
