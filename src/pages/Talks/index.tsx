/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Talks = ({ ...rest }: Props) => {
  return <div css={[container]} {...rest}></div>;
};

export default Talks;

const container = css``;
