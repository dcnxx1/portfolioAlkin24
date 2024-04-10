import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {
  DescriptionText,
  HeaderText,
} from "../../pages/Projects/Turnt/Turnt.styled";
interface ContainerProps {
  color1?: string;
  color2?: string;
}
export const Image = styled.img`
  width: 90%;
  height: 90%;
  margin: 0 auto;
`;

export const LinkToProjectPage = styled(Link)`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Container = styled.div<ContainerProps>`
  width: inherit;
  height: inherit;
  display: inherit;
  flex-direction: inherit;
  border-radius: inherit;
  text-align: center;

  padding: 10px;
  ${HeaderText} {
    margin: 0;
  }
  ${DescriptionText} {
    margin: 0;
  }

  background: ${({ color1, color2 }) =>
    `linear-gradient(${color1}, ${color2})`};
`;
