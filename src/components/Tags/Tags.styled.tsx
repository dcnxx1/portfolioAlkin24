import styled from "styled-components";
import { DescriptionText } from "../../pages/Projects/Turnt/Turnt.styled";

export const TagContainer = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const TagItem = styled.li`
  padding: 5px;
  padding-inline: 10px;
  display: inline-block;
  width: fit-content;
  border-radius: 50px;
  background-color: white;
  min-width: 50px;
  opacity: 0.8;
  height: fit-content;

  text-align: center;
  ${DescriptionText} {
    margin: 0;
    color: black;
    font-size: 14px;
    font-weight: bold;
    user-select: none;
  }
`;

export const TagIcon = styled.img`
  border: 2px solid white;
  width: 35px;
  height: 35px;
  object-fit: cover;
`;
