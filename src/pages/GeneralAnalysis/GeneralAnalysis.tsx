import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Title from 'components/context/GeneralAnalysis/Title/Title';
import Overview from 'components/context/GeneralAnalysis/Overview/Overview';
import Robot from 'components/context/GeneralAnalysis/Robot/Robot';
import { RootState } from 'store/reducers';
import { v4 as uuidv4 } from 'uuid';
import * as S from './GeneralAnalysis.styles';

const GeneralAnalysis: FC = () => {
  const robotState = useSelector((state: RootState) => state.robotsList);
  const { mode } = robotState;
  const robots = mode ? robotState.realRobotsList : robotState.simulatedRobotsList;

  return (
    <S.Wrapper>
      <Title />
      <Overview />
      <S.RobotCards>
        {robots?.map((robot) => (
          <Robot robot={robot} key={uuidv4()} />
        ))}
      </S.RobotCards>
    </S.Wrapper>
  );
};

export default GeneralAnalysis;
