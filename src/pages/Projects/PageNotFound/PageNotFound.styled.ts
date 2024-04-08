import { styled } from "styled-components";
import { HeaderText, SubHeaderText } from "../Turnt/Turnt.styled";

export const Content = styled.div`

  width: 100%;

  height: 100%;
  text-align: center;
  ${HeaderText} {
    &:nth-child(1) {
      font-size: 80px;
    }
  }
  ${SubHeaderText} {
    padding-bottom: 20px;
    &:nth-child(3) {
      padding-bottom: 60px;
 
    }
  }
`;

export const ProjectContainer = styled.div`

  ${HeaderText} {
    &:nth-child(1) {
      display: none;
    }
  }
`;
