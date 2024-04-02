import styled from "styled-components";
import { device } from "../../breakpoints";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-block: 50px;
  @media ${device.lg} {
    min-height: auto;
    height: 100%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media ${device.lg} {
    max-width: 800px;
  }
`;
