import React, { FC } from 'react';
import Switch from 'react-switch';
import * as S from './SwitchInput.styles';

type SwitchInputProps = {
  option1: string;
  option2: string;
  checked: boolean;
  onChange: any;
};

const SwitchInput: FC<SwitchInputProps> = ({
  option1,
  option2,
  checked,
  onChange,
}) => (
  <S.StyledSwitch>
    <S.Option isActive={!checked}>{option1}</S.Option>
    <Switch
      checked={checked}
      onChange={onChange}
      onColor="#00b39d"
      offColor="#098475"
      uncheckedIcon={false}
      checkedIcon={false}
      handleDiameter={15}
    />
    <S.Option isActive={checked}>{option2}</S.Option>
  </S.StyledSwitch>
);

export default SwitchInput;
