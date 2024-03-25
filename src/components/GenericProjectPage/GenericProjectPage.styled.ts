import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: purple;
  padding-block: 50px;
`;

export const InnerContainer = styled.div`
  border: 2px solid black;
  background: red;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-template-rows: repeat(2, minmax(450px, 1fr));
  grid-auto-rows: 1fr 1fr;
`;

export const GridItem = styled.div`
  border: 2px solid white;
  background: red;
`;
