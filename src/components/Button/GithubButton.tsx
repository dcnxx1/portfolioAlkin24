import { DescriptionText } from "../../pages/Projects/Turnt/Turnt.styled";
import codeIcon from "../../assets/code.png";
interface Props {
  title: string;
  href: string;
}

export default function GithubButton({ title, href }: Props) {
  return (
    <a
      target="_blank"
      style={{
        gap: "20px",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        textDecoration: "none",
        justifyContent: "space-evenly",
        paddingInline: "10px",
      }}
      href={href}
    >
      <img style={{ width: "30px", height: "30px" }} src={codeIcon} />
      <DescriptionText>{title}</DescriptionText>
    </a>
  );
}
