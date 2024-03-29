import styled from "styled-components";

export const Video = styled.video.attrs({
  muted: true,
  controls: false,
  loop: true,
  disablePictureInPicture: true,
  disableRemotePlayback: true,
})`
  object-fit: cover;
  border-radius: 80px;
  padding-bottom: inline 10px;
  user-select: none;
  outline: none;
`;

export const Source = styled.source.attrs({
  type: "sample/mp4",
})``;
