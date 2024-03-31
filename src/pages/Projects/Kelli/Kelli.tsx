import Container from "../../../components/Container/Container";
import { InnerContainer } from "../../../components/Container/Container.styled";
import Grid from "../../../components/Grid/Grid";
import { HeaderText } from "../Turnt/Turnt.styled";

export default function Kelli() {
    return <Container>
        <InnerContainer>
            <Grid>
                <Grid.Item>
                    <HeaderText>
                        Kelli
                    </HeaderText>
                </Grid.Item>
            </Grid>
        </InnerContainer>
    </Container>
}