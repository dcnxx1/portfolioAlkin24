import Container from "../../../components/Container/Container";
import BackgroundVector from "../../../assets/background-logo-vector.svg";
import { Content, ProjectContainer } from "./PageNotFound.styled";
import { HeaderText, SubHeaderText } from "../Turnt/Turnt.styled";
import ProjectPage from "../../Project/ProjectPage";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <Container
      props={{
        style: {
          backgroundImage: `url(${BackgroundVector})`,
          backgroundColor: "#3523a9",
        },
      }}
    >
      <Content>
        <HeaderText>Wow...</HeaderText>
        <SubHeaderText>Kon dit project niet vinden.</SubHeaderText>
        <SubHeaderText>
          Neem anders een kijkje naar een van deze projecten die ik heb gemaakt:
        </SubHeaderText>
        <ProjectContainer>
          <ProjectPage relativePath="projects/" />
        </ProjectContainer>
        <SubHeaderText>
          Of
          <Link style={{ color: "white" }} to="/">
            {isMobile ? "druk Hier" : "klik hier"}
          </Link>
          om terug naar de Home pagina te gaan
        </SubHeaderText>
      </Content>
    </Container>
  );
}