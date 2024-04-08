import styled from "styled-components";
import { DescriptionText } from "../Projects/Turnt/Turnt.styled";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 10px;
`;

export const Image = styled.img`
  user-select: none;
  width: 100%;
  pointer-events: none;
`;

export const DownloadButton = styled.a`
  border: 2px solid white;
  display: flex;
  cursor: pointer;
  padding-inline: 20px;
  padding-block: 10px;
  align-items: flex-end;

  ${Image} {
    width: 35px;
  }
  ${DescriptionText} {
    flex: 1;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
