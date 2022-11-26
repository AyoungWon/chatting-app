/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...rest }: Props) => {
  return (
    <div css={[container]}>
      <div css={wrapper}>
        <div>#</div>
        <input css={input} placeholder="대화 검색하기" {...rest} />
      </div>
    </div>
  );
};

const container = css`
  width: 100%;
  padding: 16px 24px;
`;
const wrapper = css`
  width: 100%;
  border: 1px solid #595959;
  border-radius: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
`;

const input = css`
  flex: 1;
  min-width: 0;
  border: none;
  font-size: 16px;
`;
export default SearchInput;
