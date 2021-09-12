import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
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

  ${media.lessThan('medium')`
    margin-bottom: 30px;
    
    img {
      margin-right: 10px;
    }
  `}
`;

export const Divisor = styled.div`
  border-right: ${({ theme }) => `2px solid ${theme.colors.typography.divisor}`};
  margin: 0 15px;
  height: 100%;

  ${media.lessThan('medium')`
    display: none;
  `}
`;
