import Container from "../Container/Container";
import BGLOGO from "../../assets/background-logo-vector.svg";
import LOGO from "../../assets/logo.png";
import { InnerContainer } from "../Container/Container.styled";
export default function Foooter() {
  return (
    <Container
      props={{
        style: {
          height: "auto",
          minHeight: "20vh",

          opacity: 1,
          backgroundColor: "black",
        },
      }}
    >
      <img
        style={{
          width: "120px",
          height: "120px",
        }}
        src={LOGO}
      />
    </Container>
  );
}
