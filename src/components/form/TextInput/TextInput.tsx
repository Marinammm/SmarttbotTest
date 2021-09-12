import React, { FC } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as S from './TextInput.styles';

type TextInputProps = {
  label: string;
  currency?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const currencyMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  requireDecimal: true,
  allowNegative: false,
  allowLeadingZeroes: false,
};

const TextInput: FC<TextInputProps> = ({
  label,
  currency = false,
  value,
  onChange,
}: TextInputProps) => {
  const currencyMask = createNumberMask(currencyMaskOptions);

  return (
    <S.Wrapper>
      <S.TextInput
        mask={currency ? currencyMask : false}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  );
};

export default TextInput;
