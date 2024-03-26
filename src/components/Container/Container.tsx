import { HTMLAttributes, ReactNode } from "react";
import { InnerContainer, Container as MainContainer } from "./Container.styled";

interface Props {
  props?: HTMLAttributes<HTMLElement>;
  children: ReactNode;
}

export default function Container({ children, props }: Props) {
  return (
    <MainContainer {...props}>
      <InnerContainer>{children}</InnerContainer>
    </MainContainer>
  );
}
