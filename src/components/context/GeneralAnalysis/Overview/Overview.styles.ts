import styled from 'styled-components';
import media from 'styled-media-query';

type NumberProps = {
  sign: number;
};

export const Title = styled.span`
  font-weight: 500;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
  color: #8a888b;
  
  &:last-of-type {
    align-items: flex-end !important;

    ${media.lessThan('medium')`
      align-items: flex-start !important;
      margin-top: 15px;
    `}
  }
`;

export const Divisor = styled.div`
  border-bottom: 2px solid #dfdfdf;
  margin: 20px 0;
`;

export const PapersTitle = styled.span`
  font-size: 12px;
  color: #8a888b;
`;

export const Papers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 12px;
  margin-top: 15px;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;

export const PaperWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  &:nth-child(odd) {
    margin-right: 50px;

    ${media.lessThan('medium')`
      margin-right: 0;
    `}
  }
  
  span {
    color: #8a888b;
    
    strong {
      color: #000000;
    }
  }
`;

export const PaperCode = styled.div`
  background-color: #00b39d;
  border-radius: 3px;
  color: white;
  font-weight: 500;
  padding: 4px 8px;
`;

export const Trail = styled.div`
  border-bottom: 2px dotted #dfdfdf;
  flex: 1;
  margin: 0 8px;
`;
