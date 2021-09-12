import React, { FC } from 'react';
import Card from 'components/structure/Card/Card';
import { Subtitle } from 'utils/global.styles';
import { history } from 'utils/routes';
import add from 'assets/images/add.png';
import * as S from './AddRobot.styles';

const AddRobot: FC = () => (
  <Card>
    <S.Content>
      <S.AddRobot>
        <S.AddRobotIcon onClick={() => history.push('/criar-robo')}>
          <img src={add} alt="add robot" />
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
