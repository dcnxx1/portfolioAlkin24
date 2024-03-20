import "./style.css";
import me from "../../assets/me.jpg";

import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import snapchat from "../../assets/facebook.svg";
import meta from "../../assets/meta.png";
import group from "../../assets/group (1).png";
export default function About(): JSX.Element {
  return (
    <div id="About">
      <section>
        <div className="about-section">
          <div className="about-container">
            <h1>Over mij</h1>
            <p>
              Ik ben een zelfgeleerde full-stack ontwikkelaar met meer dan 2
              jaar ervaring in het ontwerpen en bouwen van applicaties. <br />
              <br /> Mijn focus ligt voornamelijk op het creëren van schaalbare
              en goedwerkende oplossingen voor zowel de front-end als de
              back-end van projecten.
              <br />
              <br />
              Wat mij drijft, is de mogelijkheid om applicaties te ontwikkelen
              die een groot aantal mensen kunnen bereiken en positief
              beïnvloeden.
            </p>
          </div>
          <div className="about-me-img">
            <img src={me} />
          </div>
        </div>
        <div className="motivation-section">
          <div className="motivation-socialmedia-images">
            <div className="social-media-img">
              <img className="youtube-logo" src={youtube} />
              <img className="snapchat-logo" src={snapchat} />
            </div>
            <img src={group} className="users-group-img" />
            <div className="meta-img">
              <img className="meta-logo" src={meta} />
              <img className="instagram-logo" src={instagram} />
            </div>
          </div>
          <div className="motivation-container">
            <h1>Motivatie</h1>
            <p>
              Ik haal veel inspiratie uit bedrijven zoals Snapchat, Instagram,
              Whatsapp en Facebook. <br /> <br />
              Deze bedrijven hebben bewezen een enorme impact te hebben op
              miljoenen gebruikers over de hele wereld. <br /> <br />
              Mijn ultieme doel is om ook zo'n baanbrekende applicatie te
              ontwikkelen die een vergelijkbare impact heeft en het leven van
              veel mensen verbetert.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
