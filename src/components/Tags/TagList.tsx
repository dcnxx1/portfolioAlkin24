import { ReactNode } from "react";
import { TagContainer, TagItem, TagIcon } from "./Tags.styled";
import { DescriptionText } from "../../pages/Projects/Turnt/Turnt.styled";

interface Tag {
  tagName: string;
}

interface Props {
  children: ReactNode;
  title?: string;
}

export default function TagList({ children, title = "Tags" }: Props) {
  return (
    <TagContainer>
      <DescriptionText>{title}</DescriptionText>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          gap: "10px",
        }}
      >
        {children}
      </div>
    </TagContainer>
  );
}

TagList.Tag = function ItemTag({ tagName }: Tag) {
  return (
    <TagItem>
      <DescriptionText>{tagName}</DescriptionText>
    </TagItem>
  );
};
