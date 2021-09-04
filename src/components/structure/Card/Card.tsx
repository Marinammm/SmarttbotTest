import React, { FC } from 'react';
import * as S from './Card.styles';

type CardProps = {
  children: JSX.Element;
};

const Card: FC<CardProps> = ({ children }: CardProps) => (
  <S.Card>
    {children}
  </S.Card>
);

export default Card;
