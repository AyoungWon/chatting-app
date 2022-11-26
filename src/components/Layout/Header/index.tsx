/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Header = ({ ...rest }: Props) => {
  return (
    <div css={[container]} {...rest}>
      header
    </div>
  );
};

export default Header;

const container = css`
  width: 100vw;
  height: var(--header-height);
  border-bottom: 1px solid black;
`;
