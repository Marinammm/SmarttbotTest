import styled from 'styled-components';

type OptionProps = {
  isActive: boolean;
};

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
