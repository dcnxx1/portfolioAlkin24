import { HTMLAttributes, ReactNode } from "react";
import { GridContainer, GridItem as GridItem, GridRow } from "./Grid.styled";

interface Props {
  style?: HTMLAttributes<HTMLElement>["style"];
  children: ReactNode;
  reverse?: boolean
}
export default function Grid({ style, children, reverse = false }: Props) {
  return <GridContainer reverse={reverse}  style={style}>{children}</GridContainer>;
}

Grid.Item = function ItemGrid({ style, children }: Props) {
  return <GridItem style={style}>{children}</GridItem>;
};

Grid.Row = function RowGrid({ style, children }: Props) {
  return <GridRow style={style}>{children}</GridRow>;
};
