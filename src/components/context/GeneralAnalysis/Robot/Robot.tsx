import React, { FC } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import Card from 'components/structure/Card/Card';
import { Subtitle, ColorfulNumber } from 'utils/global.styles';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { GiPauseButton } from 'react-icons/gi';
import { formatMoney } from 'utils/auxiliary';
import * as S from './Robot.styles';

const mock = {
  id: 1648753,
  title: 'Eu Metus LLC',
  running: 0,
  updated_at: '2020-08-04 18:04:51',
  mode: 0,
  simulation: 1,
  stock_codes: 'RAIL3',
  strategy: 'Hórus',
  initial_capital: 67692.5,
  number_trades: 506,
  daily_balance: 4.45,
  type: 'Normal',
  created_at: '2020-07-27 00:10:27',
  movimentations: [
    {
      date: '2021-09-06 17:39:45',
      value: 35,
    },
    {
      date: '2021-09-06 19:39:45',
      value: 188,
    },
    {
      date: '2021-09-06 21:39:45',
      value: 92,
    },
    {
      date: '2021-09-06 23:39:45',
      value: 133,
    },
    {
      date: '2021-09-07 01:39:45',
      value: 94,
    },
    {
      date: '2021-09-07 03:39:45',
      value: 33,
    },
    {
      date: '2021-09-07 05:39:45',
      value: 52,
    },
    {
      date: '2021-09-07 07:39:45',
      value: 140,
    },
    {
      date: '2021-09-07 09:39:45',
      value: 14,
    },
    {
      date: '2021-09-07 11:39:45',
      value: 151,
    },
    {
      date: '2021-09-07 13:39:45',
      value: 29,
    },
    {
      date: '2021-09-07 15:39:45',
      value: 186,
    },
    {
      date: '2021-09-07 17:39:45',
      value: 22,
    },
    {
      date: '2021-09-07 19:39:45',
      value: 120,
    },
    {
      date: '2021-09-07 21:39:45',
      value: 90,
    },
    {
      date: '2021-09-07 23:39:45',
      value: 192,
    },
    {
      date: '2021-09-08 01:39:45',
      value: 116,
    },
    {
      date: '2021-09-08 03:39:45',
      value: 89,
    },
    {
      date: '2021-09-08 05:39:45',
      value: 149,
    },
    {
      date: '2021-09-08 07:39:45',
      value: 195,
    },
    {
      date: '2021-09-08 09:39:45',
      value: 174,
    },
    {
      date: '2021-09-08 11:39:45',
      value: 21,
    },
    {
      date: '2021-09-08 13:39:45',
      value: 125,
    },
    {
      date: '2021-09-08 15:39:45',
      value: 76,
    },
    {
      date: '2021-09-08 17:39:45',
      value: 154,
    },
    {
      date: '2021-09-08 19:39:45',
      value: 192,
    },
    {
      date: '2021-09-08 21:39:45',
      value: 80,
    },
    {
      date: '2021-09-08 23:39:45',
      value: 8,
    },
    {
      date: '2021-09-09 01:39:45',
      value: 71,
    },
    {
      date: '2021-09-09 03:39:45',
      value: 177,
    },
  ],
  last_paper: {
    robot_id: 1648753,
    paper: 'WINBG20',
    position: 17,
    type: 1,
    paper_value: 84208.15,
    profit: 5.75,
    created_at: '2020-08-28 13:40:52',
    id: 113001,
    robot: {
      title: 'Eu Metus LLC',
    },
  },
};

const Robot: FC = () => {
  const tzOffset = new Date().getTimezoneOffset() * 60000;
  const today = new Date(Date.now() - tzOffset).toISOString().split('T')[0];
  const todayMovements = mock.movimentations.filter((movement) => movement.date.split(' ')[0] === today);
  const chartData = todayMovements.map((movement) => ({
    ...movement,
    date: movement.date.split(' ')[1].split(':')[0],
  }));

  return (
    <Card>
      <S.Content>
        <S.Info>
          <S.GeneralInfo>
            <S.Title>
              {mock.title}
              <Subtitle>
                #
                {mock.id}
              </Subtitle>
            </S.Title>
            <S.Running>
              <S.RunningIcon running={mock.running} />
              {mock.running ? 'Em execução' : 'Pausado'}
            </S.Running>
          </S.GeneralInfo>

          <S.Tags>
            <div>
              <Subtitle>{mock.type}</Subtitle>
            </div>
            <div>
              <Subtitle>{mock.stock_codes}</Subtitle>
            </div>
            <div>
              <Subtitle>{mock.strategy}</Subtitle>
            </div>
          </S.Tags>

          <S.LastPaper>
            <S.Position>{mock.last_paper.position}</S.Position>
            <S.Paper>
              {mock.last_paper.paper}
              <span>{mock.last_paper.type ? 'Venda' : 'Compra'}</span>
            </S.Paper>
            <S.Values>
              <Subtitle>{formatMoney(mock.last_paper.paper_value)}</Subtitle>
              <S.Profit profit={mock.last_paper.profit > 0}>
                {mock.last_paper.profit < 0 && <IoMdArrowDropdown />}
                {mock.last_paper.profit > 0 && <IoMdArrowDropup />}
                <ColorfulNumber sign={Math.sign(mock.last_paper.profit)}>
                  {formatMoney(mock.last_paper.profit)}
                </ColorfulNumber>
              </S.Profit>
            </S.Values>
          </S.LastPaper>

          <S.DailyInfo>
            <S.Balance>
              <Subtitle>Saldo diário</Subtitle>
              <ColorfulNumber sign={Math.sign(mock.daily_balance)}>
                {formatMoney(mock.daily_balance)}
              </ColorfulNumber>
            </S.Balance>
            <S.DailyTrades>
              <Subtitle>Trades no dia</Subtitle>
              {mock.number_trades}
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
          <GiPauseButton />
        </S.PauseIcon>
      </S.Content>
    </Card>
  );
};

export default Robot;
