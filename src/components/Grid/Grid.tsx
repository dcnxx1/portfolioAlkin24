import { HTMLAttributes, ReactNode } from "react";
import { GridContainer, GridItem as GridItem } from "./Grid.styled";

interface Props {
  style?: HTMLAttributes<HTMLElement>["style"];
  children: ReactNode;
}
export default function Grid({ style, children }: Props) {
  return <GridContainer style={style}>{children}</GridContainer>;
}

Grid.Item = function ItemGrid({ style, children }: Props) {
  return <GridItem style={style}>{children}</GridItem>;
};
