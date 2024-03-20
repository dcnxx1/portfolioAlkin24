import Card from "../../components/Card/Card";
import "./style.css";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  return (
    <div id="Project">
      <section>
        <h1>Projecten</h1>
        <Card
          description="Full-Stack React Native App"
          img={"dsd"}
          link="https://unsplash.it/200/200"
          title="Turnt"
          actions={[{ onClick: () => console.log("yo"), title: "yespls" }]}
        />
      </section>
    </div>
  );
}
