import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const AddRobot = styled.div`
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    margin-bottom: 15px;
  `}
`;

export const AddRobotIcon = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.typography.border}`};
  border-radius: 5px;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  img {
    width: 46px;
    height: 30px;
    transition: all 0.5s ease;

    &:hover {
      width: 56px;
      height: 40px;
    } 
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
