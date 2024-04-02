import { CSSProperties } from "styled-components";
import {
  DescriptionText,
  HeaderText,
} from "../../pages/Projects/Turnt/Turnt.styled";
import { Container, Image } from "./Card.styled";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  color1: string;
  color2: string;
  children: ReactNode;
  linkTo: string;
}

export default function Card({ color1, color2, children, linkTo }: Props) {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      to={linkTo}
    >
      <Container color1={color1} color2={color2}>
        {children}
      </Container>
    </Link>
  );
}

Card.Image = function CardImage({
  source,
  style,
}: {
  source: any;
  style?: CSSProperties;
}) {
  return <Image style={style} src={source} />;
};

Card.Title = function CardTitle({
  children,
  style,
}: {
  children: string;
  style?: CSSProperties;
}) {
  return <HeaderText style={style}>{children}</HeaderText>;
};

Card.Description = function CardDescription({
  children,
  style,
}: {
  children: string;
  style?: CSSProperties;
}) {
  return <DescriptionText style={style}>{children}</DescriptionText>;
};
