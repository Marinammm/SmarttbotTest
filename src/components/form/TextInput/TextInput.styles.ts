import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const TextInput = styled(MaskedInput)`
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.typography.dark}`};
  transition: border-bottom-color 0.5s ease;
  
  &:focus-visible {
    outline: none;
  }
  
  &:focus {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.main.green}`};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.typography.subtitle};
  pointer-events: none;
  transition: all 0.3s ease;
  
  ${TextInput}:focus ~ & {
    font-size: 12px;
    top: -13px;
    color: ${({ theme }) => theme.colors.main.green};
  }
  
  ${TextInput}:not(:placeholder-shown) ~ & {
    font-size: 12px;
    top: -13px;
    color: ${({ theme }) => theme.colors.main.green};
  }
`;
