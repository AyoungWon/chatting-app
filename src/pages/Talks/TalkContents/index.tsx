/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

const container = css`
  height: 100%;
  overflow-y: auto;
  flex: 1;
  background-color: green;
  padding: 0;
  border: 2px solid red;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TalkContents = ({ ...rest }: Props) => {
  return <div css={[container]} {...rest}></div>;
};

export default TalkContents;
