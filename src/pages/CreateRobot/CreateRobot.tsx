import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import Card from 'components/structure/Card/Card';
import TextInput from 'components/form/TextInput/TextInput';
import SwitchInput from 'components/form/SwitchInput/SwitchInput';
import { getStrategies } from 'store/strategy/strategy.useCases';
import { getBrokers } from 'store/broker/broker.useCases';
import { createRobot } from 'store/robot/robot.useCases';
import { RootState } from 'store/reducers';
import { getCreateRobotPayload } from 'utils/auxiliary';
import * as S from './CreateRobot.styles';

export type FormData = {
  strategy: {
    label: string;
    value: number;
  };
  title: string;
  initial_capital: string;
  mode?: boolean;
  broker?: {
    label: string;
    value: number;
  };
  type?: boolean;
};

const CreateRobot: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStrategies());
    dispatch(getBrokers());
  }, []);

  const strategyOptions = useSelector((state: RootState) => state.strategy.data);
  const brokerOptions = useSelector((state: RootState) => state.broker.data);

  const {
    handleSubmit,
    control,
    watch,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const mode = watch('mode');

  const onSubmit = (data: FormData) => {
    const payload = getCreateRobotPayload(data);

    dispatch(createRobot(payload));
  };

  return (
    <Card>
      <S.Content>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="strategy"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={strategyOptions}
                placeholder="Estratégia"
                value={field.value}
                onChange={(v) => field.onChange(v)}
              />
            )}
          />
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Nome do robô"
                value={field.value}
                onChange={(v) => field.onChange(v)}
              />
            )}
          />
          <Controller
            name="initial_capital"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Capital initial"
                currency
                value={field.value}
                onChange={(v) => field.onChange(v)}
              />
            )}
          />
          <Controller
            name="mode"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <SwitchInput
                option1="Simulado"
                option2="Real"
                checked={field.value}
                onChange={(v: any) => field.onChange(v)}
              />
            )}
          />
          {mode ? (
            <Controller
              name="broker"
              control={control}
              rules={{ required: mode }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={brokerOptions}
                  placeholder="Corretora"
                  value={field.value}
                  onChange={(v) => field.onChange(v)}
                />
              )}
            />
          ) : (
            <Controller
              name="type"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <SwitchInput
                  option1="Otimista"
                  option2="Pessimista"
                  checked={field.value}
                  onChange={(v: any) => field.onChange(v)}
                />
              )}
            />
          )}
          <S.Submit>
            <S.Button type="submit">Criar robô</S.Button>
            {!isValid && <S.Error>Todos os campos devem ser preenchidos</S.Error>}
          </S.Submit>
        </S.Form>
      </S.Content>
    </Card>
  );
};

export default CreateRobot;
