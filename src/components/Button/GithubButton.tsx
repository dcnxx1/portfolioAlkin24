import { DescriptionText } from "../../pages/Projects/Turnt/Turnt.styled";
import codeIcon from "../../assets/code.png";
interface Props {
  title: string;
  href: string
}

export default function GithubButton({ title, href }: Props) {
  return (
    <a
    target="_blank"
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "space-evenly",
        paddingInline: "10px",
      }}
      href={href}
    >
      <img style={{ width: "50px" }} src={codeIcon} />
      <DescriptionText>{title}</DescriptionText>
    </a>
  );
}
