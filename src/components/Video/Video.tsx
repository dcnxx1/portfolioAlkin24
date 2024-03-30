import { forwardRef, useCallback, useState } from "react";
import * as Styled from "./Video.styled";

interface Props {
  source: any;
  style?: React.CSSProperties;
}

import { InView } from "react-intersection-observer";

export const InViewContainer = ({ source, style }: Props) => {
  const [isPlaying, setPlaying] = useState(false);
  const handleIsPlaying = useCallback(() => {
    setPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <InView trackVisibility onChange={handleIsPlaying}>
      {({ inView, ref, entry }) => (
        <>
          <Styled.Video
            as="video"
            ref={ref}
            autoPlay={inView}
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
