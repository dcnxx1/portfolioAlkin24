import GenericProjectPage from "../../components/GenericProjectPage/GenericProjectPage";
import iPhoneTurnt from "../../assets/project-assets/turnt/iphone_turnt.svg";

export default function Turnt() {
  return (
    <GenericProjectPage
      headerImage={iPhoneTurnt}
      projectName="Turnt"
      projectDescription="Turnt is een muziekapplicatie gebouwd met React Native en NestJS,  geïnspireerd door TikTok. Gebruikers kunnen moeiteloos nieuwe liedjes en  artiesten ontdekken en met een druk op de knop de beste 30 seconden beluisteren, geselecteerd door de artiesten zelf. "
    />
  );
}
