import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  max-width: 230px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Submit = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main.green};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: 15px;
  padding: 5px 0;
  cursor: pointer;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.main.red};
  font-size: 12px;
`;
