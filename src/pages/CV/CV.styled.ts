import styled from "styled-components";
import { DescriptionText } from "../Projects/Turnt/Turnt.styled";

export const Content = styled.div`
  border: 2px solid orange;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  user-select: none;
  pointer-events: none;
`;

export const DownloadButton = styled.a`
  border: 2px solid white;
  display: flex;

  align-items: center;
  ${Image} {
    width: 45px;
  }
  ${DescriptionText} {
    flex: 1;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  background: orange;
  width: 20%;
`;
