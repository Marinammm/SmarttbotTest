import React, { FC } from 'react';
import Card from 'components/structure/Card/Card';
import * as S from './Overview.styles';

const mock = {
  moviment_summary: -220,
  transactions: 1000,
  open_positions: 1000,
  papers: [
    {
      name: 'WING20',
      trasactions: 31,
    },
    {
      name: 'ABEV',
      trasactions: 455,
    },
    {
      name: 'BOVA11',
      trasactions: 214,
    },
  ],
};

const Overview: FC = () => (
  <Card>
    <S.Title>Resumo geral operações</S.Title>

    <S.Info>
      <S.InfoItem>
        <span>Resumo de movimentação</span>
        <S.Number sign={Math.sign(mock.moviment_summary)}>
          {mock.moviment_summary}
        </S.Number>
      </S.InfoItem>
      <S.InfoItem>
        <span>Total de transações realizadas</span>
        <S.Number sign={0}>{mock.transactions}</S.Number>
      </S.InfoItem>
    </S.Info>

    <S.Divisor />

    <S.PapersTitle>Papéis negociados</S.PapersTitle>
    <S.Papers>
      {mock.papers.map((paper) => (
        <S.PaperWrapper>
          <S.PaperCode>{paper.name}</S.PaperCode>
          <S.Trail />
          <span>
            <strong>{paper.trasactions}</strong>
            &nbsp;transações
          </span>
        </S.PaperWrapper>
      ))}
    </S.Papers>
  </Card>
);

export default Overview;
