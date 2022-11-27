/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

type ButtonSize = "m" | "s";
interface Props extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const BUTTON_HEIGHT: { [key in ButtonSize]: number } = {
  m: 42,
  s: 32,
};

const RoundButton = ({ size = "m", ...rest }: Props) => {
  return (
    <button
      css={[
        container,
        css`
          height: ${BUTTON_HEIGHT[size]}px;
        `,
      ]}
      {...rest}
    ></button>
  );
};

export default RoundButton;

const container = css`
  padding: 0 16px;
  background-color: #5a7aff;
  border-radius: 24px;
  color: #fff;
`;
