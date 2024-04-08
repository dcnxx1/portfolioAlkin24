import { CSSProperties } from "styled-components";
import {
  DescriptionText,
  HeaderText,
} from "../../pages/Projects/Turnt/Turnt.styled";
import { Container, Image, LinkToProjectPage } from "./Card.styled";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  color1: string;
  color2: string;
  children: ReactNode;
  linkTo: string;
  style?: CSSProperties;
}

export default function Card({
  color1,
  color2,
  children,
  linkTo,
  style,
}: Props) {
  const location = useLocation();
  const isInProjects = location.pathname.includes("/projects");
  console.log("location :>>", location);
  // Adjust link based on whether we are already in the projects route
  const adjustedLinkTo = isInProjects
    ? "/projects" + linkTo
    : `/projects${linkTo}`;

  return (
    <Container style={style} color1={color1} color2={color2}>
      <LinkToProjectPage
        style={{ textAlign: "center", textDecoration: "none" }}
        to={{
          pathname: adjustedLinkTo,
        }}
      >
        {children}
      </LinkToProjectPage>
    </Container>
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
