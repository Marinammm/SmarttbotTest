import styled from 'styled-components';

export const Subtitle = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.typography.subtitle};
`;

type NumberProps = {
  sign: number;
};

export const ColorfulNumber = styled.span<NumberProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ sign, theme }) => {
    switch (sign) {
      case 0: return theme.colors.neutral.black;
      case 1: return theme.colors.main.green;
      case -1: return theme.colors.main.red;
      default: return theme.colors.neutral.black;
    }
  }};
`;
