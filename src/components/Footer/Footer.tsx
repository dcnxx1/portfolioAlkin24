import LOGO from "../../assets/logo.png";
import Container from "../Container/Container";
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
