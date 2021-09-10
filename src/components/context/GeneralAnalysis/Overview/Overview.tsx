import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOverview } from 'store/overview/overview.useCases';
import { RootState } from 'store/reducers';
import Card from 'components/structure/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import { ColorfulNumber } from 'utils/global.styles';
import * as S from './Overview.styles';

const Overview: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOverview());
  }, []);

  const overviewData = useSelector((state: RootState) => state.overview).data;

  return (
    <Card>
      {overviewData && (
        <>
          <S.Title>Resumo geral operações</S.Title>

          <S.Info>
            <S.InfoItem>
              <span>Resumo de movimentação</span>
              <ColorfulNumber sign={Math.sign(overviewData.moviment_summary)}>
                {overviewData.moviment_summary}
              </ColorfulNumber>
            </S.InfoItem>
            <S.InfoItem>
              <span>Total de transações realizadas</span>
              <ColorfulNumber sign={0}>{overviewData.transactions}</ColorfulNumber>
            </S.InfoItem>
          </S.Info>

          <S.Divisor />

          <S.PapersTitle>Papéis negociados</S.PapersTitle>
          <S.Papers>
            {overviewData.papers.map((paper) => (
              <S.PaperWrapper key={uuidv4()}>
                <S.PaperCode>{paper.name}</S.PaperCode>
                <S.Trail />
                <span>
                  <strong>{paper.trasactions}</strong>
                  &nbsp;transações
                </span>
              </S.PaperWrapper>
            ))}
          </S.Papers>
        </>
      )}
    </Card>
  );
};

export default Overview;
