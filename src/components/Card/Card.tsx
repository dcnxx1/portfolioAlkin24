import "./Card.css";

interface Props {
  title: string;
  description: string;
  imgSource: any;
  onClickLearnMore: () => void;
  className?: string;
}

export default function Card({
  title,
  description,
  imgSource,
  className,
  onClickLearnMore,
}: Props) {
  return (
    <div className={`project-card  ${className}`}>
      <img src={imgSource} />
      <div className="card-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <span onClick={onClickLearnMore}>Leer meer</span>
      </div>
    </div>
  );
}
