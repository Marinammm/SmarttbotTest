import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddRobot = styled.div`
  display: flex;
  align-items: center;
`;

export const AddRobotIcon = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.typography.border}`};
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.5s ease;
  
  &:hover {
    font-size: 30px;
  }
`;

export const AddRobotText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  
  strong {
    color: ${({ theme }) => theme.colors.main.green};
    font-weight: 500;
  }
`;

export const Plan = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.typography.dark};
  
  span {
    color: ${({ theme }) => theme.colors.main.green};
  }
`;
