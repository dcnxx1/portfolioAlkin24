import { styled } from "styled-components";
import { device } from "../../breakpoints";
import {
  DescriptionText,
  HeaderText,
} from "../../pages/Projects/Turnt/Turnt.styled";
interface ContainerProps {
  color1: string;
  color2: string;
}
export const Image = styled.img`
  object-fit: contain;
  aspect-ratio: 1;
  height: 80%;

  background-size: cover;
`;

export const Container = styled.div<ContainerProps>`
  aspect-ratio: 1 /1;
  width: 95%;
  height: 90%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${HeaderText} {
    margin: 0;
    @media ${device.lg} {
      font-size: 20px;
    }
    @media ${device.md} {
      font-size: 24px;
    }
  }
  ${DescriptionText} {
    margin: 0;
    @media ${device.lg} {
      font-size: 14px;
    }
    @media ${device.md} {
      font-size: initial;
    }
  }
  background: ${({ color1, color2 }) =>
    `linear-gradient(${color1}, ${color2})`};

  ${Image} {
    max-width: 500px;
    min-width: 300px;
    width: 500px;

    @media ${device.lg} {
      max-width: 300px;
      min-width: 150px;
      width: 300px;
    }
    @media ${device.md} {
      max-width: 500px;
      min-width: 300px;
      width: 100%;
    }
  }
`;
