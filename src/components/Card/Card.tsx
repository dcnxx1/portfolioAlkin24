import { Link } from "react-router-dom";
import "./Card.css";

interface Props {
  title: string;
  description: string;
  imgSource: any;
  onClickLearnMore: () => void;
  className?: string;
  linkTo?: string;
}

export default function Card({
  title,
  description,
  imgSource,
  className,
  onClickLearnMore,
  linkTo = "/",
}: Props) {
  return (
    <div className={`project-card  ${className}`}>
      <img src={imgSource} />
      <div className="card-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={linkTo}>
          <span onClick={onClickLearnMore}>Leer meer</span>
        </Link>
      </div>
    </div>
  );
}
