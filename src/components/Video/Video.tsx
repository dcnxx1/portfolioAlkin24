import * as Styled from "./Video.styled";

interface Props {
  source: any;
  style?: HTMLDivElement["style"];
}

export default function Video({ source, style }: Props) {
  return (
    <Styled.Video src={source}>
      <Styled.Source src={source}></Styled.Source>
    </Styled.Video>
  );
}
