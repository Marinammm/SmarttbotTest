import styled from 'styled-components';

type RunningIconProps = {
  running: number;
}

type ProfitProps = {
  profit: boolean;
}

export const Content = styled.div`
  display: flex;
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

export const Running = styled.div`
  color: ${({ theme }) => theme.colors.typography.subtitle};
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const RunningIcon = styled.div<RunningIconProps>`
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: ${({ running, theme }) => (running ? theme.colors.main.green : theme.colors.main.red)};
  margin-right: 8px;
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 10px;
  
  div {
    border: ${({ theme }) => `2px solid ${theme.colors.typography.border}`};
    margin-right: 5px;
    padding: 0 5px;
    border-radius: 3px;
  }
`;

export const LastPaper = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.typography.border}`};
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const Position = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.typography.darker};
`;

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.typography.dark};
  
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.neutral.black};
    font-weight: 300;
  }
`;

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Profit = styled.div<ProfitProps>`
  display: flex;  
  color: ${({ profit, theme }) => (profit ? theme.colors.main.green : theme.colors.main.red)};
`;

export const DailyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DailyTrades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.typography.darker};
`;

export const ChartData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;
`;

export const PauseIcon = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.typography.dark};
  right: 0;
  cursor: pointer;
`;
