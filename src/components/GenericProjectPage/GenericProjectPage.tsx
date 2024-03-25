import "./GenericProjectPage.css";
import {
  Container,
  Grid,
  InnerContainer,
  GridItem,
} from "./GenericProjectPage.styled";
interface Props {
  projectName: string;
  projectDescription: string;
  headerImage: any;
}

export default function GenericProjectPage({
  projectName,
  projectDescription,
  headerImage,
}: Props) {
  return (
    <Container>
      <InnerContainer>
        <Grid>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
          <GridItem>yo</GridItem>
        </Grid>
      </InnerContainer>
    </Container>
  );
}

/**
 * 
 * 
 * <div className="project-page-container">
      <div className="project-page-inner">
        <div className="project-page-header">
          <div className="project-page-header-text">
            <h1>{projectName}</h1>
            <h2>{projectDescription}</h2>
          </div>
          <div className="project-page-header-image">
            <img src={headerImage} />
          </div>
        </div>
      </div>
    </div>
 * 
 * 
 */
