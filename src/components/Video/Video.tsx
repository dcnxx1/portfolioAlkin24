import { useCallback, useState } from "react";
import * as Styled from "./Video.styled";
import { isMobile } from "react-device-detect";
interface Props {
  source: any;
  style?: React.CSSProperties;
  muted?: boolean;
  onClick?: () => void;
  fallbackImage?: any;
}

import { InView } from "react-intersection-observer";

export const InViewContainer = ({
  source,
  style,
  muted = true,
  onClick,
  fallbackImage,
}: Props) => {
  const [isPlaying, setPlaying] = useState(false);

  const handleIsPlaying = useCallback(() => {
    setPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <InView style={style} onChange={handleIsPlaying}>
      {({ inView, ref }) => (
        <>
          {isMobile ? (
            <Styled.DemoImage src={fallbackImage} />
          ) : (
            <Styled.Video
              preload="auto"
              playsInline={true}
              onClick={onClick}
              as="video"
              defaultChecked
              muted={muted}
              ref={ref}
              autoPlay={inView ?? true}
              style={style}
              src={source}
            >
              <Styled.Source style={style} src={source}></Styled.Source>
            </Styled.Video>
          )}
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
