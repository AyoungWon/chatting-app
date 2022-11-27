/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Header = ({ ...rest }: Props) => {
  return (
    <div css={[container]} {...rest}>
      <nav css={wrapper}>
        <Link to="/talks">
          <h3>talk</h3>
        </Link>
      </nav>
    </div>
  );
};

export default Header;

const container = css`
  width: 100vw;
  height: var(--header-height);
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`;

const wrapper = css`
  display: flex;
  gap: 24px;
`;
