import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from 'components/context/GeneralAnalysis/Title/Title';
import Overview from 'components/context/GeneralAnalysis/Overview/Overview';
import AddRobot from 'components/context/GeneralAnalysis/AddRobot/AddRobot';
import Robot from 'components/context/GeneralAnalysis/Robot/Robot';
import { RootState } from 'store/reducers';
import { v4 as uuidv4 } from 'uuid';
import { getRobotsList } from 'store/robotsList/robotsList.useCases';
import Loading from 'components/structure/Loading/Loading';
import * as S from './GeneralAnalysis.styles';

const GeneralAnalysis: FC = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(1);

  const robotState = useSelector((state: RootState) => state.robotsList);
  const robots = mode ? robotState.realRobotsList : robotState.simulatedRobotsList;
  const { loading } = robotState;

  useEffect(() => {
    dispatch(getRobotsList());
  }, []);

  return (
    <S.Wrapper>
      <S.PageItem>
        <Title mode={mode} setMode={setMode} />
      </S.PageItem>
      <S.PageItem>
        <Overview />
      </S.PageItem>
      <S.PageItem>
        <AddRobot />
      </S.PageItem>
      {loading || !robots?.length ? (
        <Loading />
      ) : (
        <S.RobotCards>
          {robots?.map((robot) => (
            <Robot robot={robot} key={uuidv4()} />
          ))}
        </S.RobotCards>
      )}
    </S.Wrapper>
  );
};

export default GeneralAnalysis;
