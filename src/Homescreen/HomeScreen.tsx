import About from "../pages/About/About";
import Hero from "../pages/Hero/Hero";
import ProjectPage from "../pages/Project/ProjectPage";
import BackgroundVector from "../assets/background-logo-vector.svg";
export default function HomeScreen() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundVector})`,
        background: "#3523a9",
        height: "100%",
        minHeight: " 100vh",
      }}
    >
      <Hero  />
      <About />
      <ProjectPage />
    </div>
  );
}
