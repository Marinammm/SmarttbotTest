import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  position: fixed;
  height: calc(100% - 77px);
  background-color: white;
  border-radius: 6px;
  width: 40px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  transition: width 0.5s ease;
  overflow: hidden;
  padding: 15px 0 0 10px;
  z-index: 2;
  
  &:hover {
    width: 150px;
  }

  ${media.lessThan('small')`
    display: none;
  `}
`;

export const Divisor = styled.div`
  width: calc(100% - 10px);
  border-bottom: 2px solid #dfdfdf;
  margin-top: 8px;
  margin-bottom: 25px;
`;

export const MenuItem = styled.div`
  display: flex;
  font-size: 14px;
  color: #8a888b;
  cursor: pointer;
  
  span {
    margin-left: 16px;
    white-space: nowrap;
  }
`;
