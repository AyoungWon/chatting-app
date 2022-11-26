/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const container = css`
  overflow: none;
`;
const contents = css`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(var(--100vh) - var(--header-height));
`;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Layout = ({ ...rest }: Props) => {
  return (
    <div css={[container]} {...rest}>
      <Header />
      <div css={contents}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
