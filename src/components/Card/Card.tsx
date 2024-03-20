import "./styles.css";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  img: any;
  actions: { onClick: () => void; title: string }[];
  link: string;
}

export default function Card({ title, description, actions, link }: Props) {
  return (
    <div id="Card">
      <p>{description}</p>
      {actions.map((action) => (
        <div>
          <Link className="link-button" to={link}>
            <span>{title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
