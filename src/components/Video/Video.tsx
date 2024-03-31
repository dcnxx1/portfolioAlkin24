import { useCallback, useState } from "react";
import * as Styled from "./Video.styled";

interface Props {
  source: any;
  style?: React.CSSProperties;
  muted?: boolean;
  onClick?: () => void;
}

import { InView } from "react-intersection-observer";

export const InViewContainer = ({
  source,
  style,
  muted = true,
  onClick,
}: Props) => {
  const [isPlaying, setPlaying] = useState(false);
  
  const handleIsPlaying = useCallback(() => {
    setPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <InView onChange={handleIsPlaying}>
      {({ inView, ref, entry }) => (
        <>
          <Styled.Video
            onClick={onClick}
            as="video"
            muted={muted}
            ref={ref}
            autoPlay={inView ?? true}
            style={style}
            src={source}
          >
            <Styled.Source style={style} src={source}></Styled.Source>
          </Styled.Video>
        </>
      )}
    </InView>
  );
};

export default function Video({ source, style }: Props) {
  return (
    <Styled.Video style={style} src={source}>
      <Styled.Source src={source}></Styled.Source>
    </Styled.Video>
  );
}
