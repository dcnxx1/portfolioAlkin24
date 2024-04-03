import styled from "styled-components";
import { device } from "../../breakpoints";
import { DescriptionText } from "../Projects/Turnt/Turnt.styled";

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: center;
  flex-direction: column;
  display: flex;
  width: 100%;

  ${DescriptionText} {
    text-align: center;
    width: 50%;
  }
  @media ${device.md} {
    ${Image} {
    }
    ${DescriptionText} {
      width: 90%;
    }
  }
`;
