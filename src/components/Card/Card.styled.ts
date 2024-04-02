import { styled } from "styled-components";
import {
  HeaderText,
  DescriptionText,
} from "../../pages/Projects/Turnt/Turnt.styled";
interface ContainerProps {
  color1: string;
  color2: string;
}
export const Image = styled.img`
  object-fit: contain;
  border: 2px solid white;
  aspect-ratio: 1;
  height: 80%;
  background-size: cover;
`;

export const Container = styled.div<ContainerProps>`
  border: 2px solid white;
  aspect-ratio: 1 /1;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${HeaderText} {
    margin: 0;
  }
  ${DescriptionText} {
    margin: 0;
  }
  background: ${({ color1, color2 }) =>
    `linear-gradient(${color1}, ${color2})`};

  ${Image} {
    max-width: 500px;
    min-width: 300px;
    width: 500px;
  }
`;
