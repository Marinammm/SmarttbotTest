import styled from 'styled-components';
import media from 'styled-media-query';

export const Background = styled.div`
  background-color: #F5F5F5;
  padding: 30px;
  font-family: 'Roboto';
  min-height: 100vh;
  overflow: hidden;

  ${media.lessThan('medium')`
      padding: 10px
    `}
`;
