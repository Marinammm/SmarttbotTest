import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import Card from 'components/structure/Card/Card';
import { startStopRobot } from 'store/robot/robot.useCases';
import { MovimentationType, RobotsListProps } from 'store/robotsList/robotsList.types';
import { Subtitle, ColorfulNumber } from 'utils/global.styles';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { GiPauseButton } from 'react-icons/gi';
import { IoPlay } from 'react-icons/io5';
import { formatMoney } from 'utils/auxiliary';
import * as S from './Robot.styles';

type RobotProps = {
  robot: RobotsListProps;
};

const Robot: FC<RobotProps> = ({ robot }: RobotProps) => {
  const [runningState, setRunningState] = useState(robot.running);
  const dispatch = useDispatch();

  const tzOffset = new Date().getTimezoneOffset() * 60000;
  const today = new Date(Date.now() - tzOffset).toISOString().split('T')[0];
  const todayMovements = robot.movimentations.filter((movement: MovimentationType) => movement.date.split(' ')[0] === today);
  const chartData = todayMovements.map((movement: MovimentationType) => ({
    ...movement,
    date: movement.date.split(' ')[1].split(':')[0],
  }));

  const stop = () => {
    dispatch(startStopRobot(robot.id, true));
    setRunningState(0);
  };

  const start = () => {
    dispatch(startStopRobot(robot.id, false));
    setRunningState(1);
  };

  return (
    <Card>
      {robot && (
        <S.Content>
          <S.Info>
            <S.GeneralInfo>
              <S.Title>
                {robot.title}
                <Subtitle>
                  #
                  {robot.id}
                </Subtitle>
              </S.Title>
              <S.Running>
                <S.RunningIcon running={robot.running} />
                {runningState ? 'Em execução' : 'Pausado'}
              </S.Running>
            </S.GeneralInfo>

            <S.Tags>
              <div>
                <Subtitle>{robot.type}</Subtitle>
              </div>
              <div>
                <Subtitle>{robot.stock_codes}</Subtitle>
              </div>
              <div>
                <Subtitle>{robot.strategy}</Subtitle>
              </div>
            </S.Tags>

            <S.LastPaper>
              {robot.last_paper?.id && (
                <>
                  <S.Position>{robot.last_paper?.position}</S.Position>
                  <S.Paper>
                    {robot.last_paper?.paper}
                    <span>{robot.last_paper?.type ? 'Venda' : 'Compra'}</span>
                  </S.Paper>
                  <S.Values>
                    <Subtitle>{formatMoney(robot.last_paper?.paper_value)}</Subtitle>
                    <S.Profit profit={robot.last_paper?.profit > 0}>
                      {robot.last_paper?.profit < 0 && <IoMdArrowDropdown />}
                      {robot.last_paper?.profit > 0 && <IoMdArrowDropup />}
                      <ColorfulNumber sign={Math.sign(robot.last_paper?.profit)}>
                        {formatMoney(robot.last_paper?.profit)}
                      </ColorfulNumber>
                    </S.Profit>
                  </S.Values>
                </>
              )}
            </S.LastPaper>

            <S.DailyInfo>
              <S.Balance>
                <Subtitle>Saldo diário</Subtitle>
                <ColorfulNumber sign={Math.sign(robot.daily_balance)}>
                  {formatMoney(robot.daily_balance)}
                </ColorfulNumber>
              </S.Balance>
              <S.DailyTrades>
                <Subtitle>Trades no dia</Subtitle>
                {chartData.length}
              </S.DailyTrades>
            </S.DailyInfo>
          </S.Info>

          <S.ChartData>
            <S.Title>
              Histórico do dia
              <Subtitle>Última utilização</Subtitle>
            </S.Title>
            <LineChart
              data={chartData}
              width={300}
              height={172}
              margin={{ left: -30, right: 10, top: 20 }}
            >
              <Line dataKey="value" type="monotone" stroke="#00b39d" />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis
                dataKey="date"
                tick={{ stroke: '#b6b5b7', fontSize: 12, strokeWidth: 0.5 }}
                tickFormatter={(v) => (`${v}h`)}
              />
              <YAxis dataKey="value" tick={{ stroke: '#b6b5b7', fontSize: 12, strokeWidth: 0.5 }} />
            </LineChart>
          </S.ChartData>
          <S.PauseIcon>
            {runningState ? <GiPauseButton onClick={stop} /> : <IoPlay onClick={start} />}
          </S.PauseIcon>
        </S.Content>
      )}
    </Card>
  );
};

export default Robot;
