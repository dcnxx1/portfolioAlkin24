import { styled } from "styled-components";
import { device } from "../../breakpoints";
import { HeaderText } from "../Projects/Turnt/Turnt.styled";

export const Container = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;

  place-content: center;
  grid-template-columns: repeat(2, 50%);
  grid-auto-rows: repeat(3, 50%);

  @media ${device.md} {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 100%;
    place-items: center;
    gap: 0;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media ${device.lg} {
    max-width: 900px;
  }
  @media ${device.md} {
    max-width: 600px;
    ${HeaderText} {
      text-align: center;
    }
  }
`;
