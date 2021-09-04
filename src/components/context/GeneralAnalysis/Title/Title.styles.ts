import styled from 'styled-components';

type OptionProps = {
  isActive: boolean;
};

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    &:nth-of-type(1) {
      font-weight: 500;
    }
    &:nth-of-type(2) {
      color: #8a888b;
    }
    &:nth-of-type(3) {
      color: #00b39d;
    }
  }
`;

export const Divisor = styled.div`
  border-right: 2px solid #dfdfdf;
  margin: 0 15px;
`;

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
`;

export const Option = styled.span<OptionProps>`
  font-size: 16px;
  transition: all 0.5s ease;
  color: ${({ isActive }) => (isActive ? '#000000' : '#8a888b')};
  font-weight: ${({ isActive }) => (isActive ? 500 : 400)};
  
  &:first-of-type {
    margin-right: 8px;
  }
  
  &:last-of-type {
    margin-left: 8px;
  }
`;
