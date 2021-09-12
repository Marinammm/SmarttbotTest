import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageItem = styled.div`
  margin-bottom: 20px;
`;

export const RobotCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;
