import "./style.css";
import me from "../../assets/me.jpg";
import awslogo from "../../assets/image 1.svg";
import reactlogo from "../../assets/image 2.svg";
import nodejsLogo from "../../assets/image 3.svg";
import githubLogo from "../../assets/image 4.svg";
import reactQueryLogo from "../../assets/image 5.svg";

export default function Hero() {
  return (
    <div id="Hero">
      <section> 
        <div className="container-name">
          <h1>Alkin Sali</h1>
          <h2>Full-Stack Developer</h2>
          <img className="img-me" src={me} />
          <div className="container-description">
            <h2>
              Ervaren zelf geleerde Full-stack Developer met meer dan twee jaar
              ervaring in het ontwikkelen van schaalbare applicaties
            </h2>
          </div>
        </div>
        <div className="container-techstack">
          <div className="techstack-images">
            <img src={awslogo} />
            <img src={reactlogo} />
            <img src={nodejsLogo} />
            <img src={githubLogo} />
            <img src={reactQueryLogo} />
          </div>
        </div>
      </section>
    </div>
  );
}
