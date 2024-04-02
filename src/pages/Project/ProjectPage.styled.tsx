import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const InnterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
export const Grid = styled.div`
  display: grid;
  gap: 20px 0px;
  place-items: start;
  place-content: center;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
