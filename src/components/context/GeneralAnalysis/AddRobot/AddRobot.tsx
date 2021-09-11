import React, { FC } from 'react';
import Card from 'components/structure/Card/Card';
import { Subtitle } from 'utils/global.styles';
import { FaRobot } from 'react-icons/fa';
import * as S from './AddRobot.styles';

const AddRobot: FC = () => (
  <Card>
    <S.Content>
      <S.AddRobot>
        <S.AddRobotIcon>
          <FaRobot />
        </S.AddRobotIcon>
        <S.AddRobotText>
          Adicionar novo Robô
          <Subtitle>
            Você possui
            <strong>&nbsp;02 robôs&nbsp;</strong>
            disponíveis
          </Subtitle>
        </S.AddRobotText>
      </S.AddRobot>

      <S.Plan>
        Plano Pro &bull;
        <span>&nbsp;Fazer Upgrade de plano</span>
      </S.Plan>
    </S.Content>
  </Card>
);

export default AddRobot;
