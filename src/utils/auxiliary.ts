import { CreateRobotProps } from 'store/robot/robot.types';
import { FormData } from 'pages/CreateRobot/CreateRobot';

export const formatMoney = (num: number): string => (
  (num < 0 ? '-R$' : 'R$') + num.toFixed(2).toString().replace('.', ',')
);

export const currencyToFloat = (currency: string): number => (
  parseFloat(currency.split('$')[1].replace('.', '').replace(',', '.'))
);

export const getCreateRobotPayload = (data: FormData): CreateRobotProps => {
  const initialCapital = currencyToFloat(data.initial_capital);
  const payload: CreateRobotProps = {
    ...data,
    strategy_id: data.strategy.value,
    initial_capital: initialCapital,
    mode: data.mode ? 1 : 0,
    type: data.type ? 'Pessimista' : 'Otimista',
    simulation: data.mode ? 1 : 0,
    broker_id: data.broker?.value,
  };
  if (data.mode) {
    delete payload.type;
    delete payload.simulation;
  } else {
    delete payload.broker_id;
  }

  return payload;
};
