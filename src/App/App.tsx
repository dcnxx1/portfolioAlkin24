import About from "../pages/About/About";
import Hero from "../pages/Hero/Hero";
import ProjectPage from "../pages/Project/ProjectPage";
import "./App.css";

function App() {
  // ∏
  // const onPressNavigateToProject = useCallback(() => {
  //   projectPageRef.current?.scrollIntoView();
  // }, [projectPageRef]);

  return (
    <div id="App">
      <Hero />
      <About />
      <ProjectPage />
    </div>
  );
}

export default App;
