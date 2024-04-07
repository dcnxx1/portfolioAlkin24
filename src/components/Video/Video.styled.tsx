import styled from "styled-components";

export const Video = styled.video.attrs({
  controls: false,
  loop: true,
  disablePictureInPicture: true,
  disableRemotePlayback: true,
})`
  object-fit: cover;

  padding-bottom: inline 10px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  outline: none;
  pointer-events: none !important;
`;

export const Source = styled.source.attrs({
  type: "application/octet-stream",
})``;

export const DemoImage = styled.img`
  width: 100%;

  pointer-events: none;
  object-fit: contain;
  user-select: none;
`;
