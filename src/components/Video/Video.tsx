import { useCallback, useState } from "react";
import * as Styled from "./Video.styled";
import { isMobile } from "react-device-detect";
interface Props {
  source: any;
  style?: React.CSSProperties;
  muted?: boolean;
  onClick?: () => void;
  fallbackSource?: any;
}

import { InView } from "react-intersection-observer";

export const InViewContainer = ({
  source,
  style,
  muted = true,
  onClick,
  fallbackSource,
}: Props) => {
  const [isPlaying, setPlaying] = useState(false);

  const handleIsPlaying = useCallback(() => {
    setPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <InView style={{}} onChange={handleIsPlaying}>
      {({ inView, ref }) => (
        <>
          <Styled.Video
            preload="auto"
            playsInline
            onClick={onClick}
            as="video"
            muted={muted}
            ref={ref}
            autoPlay={inView ?? true}
            style={style}
            src={isMobile ? fallbackSource : source}
          >
            <Styled.Source
              style={style}
              src={isMobile ? fallbackSource : source}
            ></Styled.Source>
            <source
              src={isMobile ? fallbackSource : source}
              type="video/mp4"
            ></source>
            <source
              src={isMobile ? fallbackSource : source}
              type="video/webm"
            ></source>
            <source
              src={isMobile ? fallbackSource : source}
              type="video/m4v"
            ></source>
            <source
              src={isMobile ? fallbackSource : source}
              type="video/mov"
            ></source>
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
      <source src={source} type="video/mp4"></source>
      <source src={source} type="video/webm"></source>
      <source src={source} type="video/mov"></source>
    </Styled.Video>
  );
}
