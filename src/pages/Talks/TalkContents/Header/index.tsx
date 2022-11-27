/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { UserInfo } from "../../../../types/user";

interface Props extends HTMLAttributes<HTMLDivElement> {
  userInfo?: UserInfo;
}

const Header = ({ userInfo, ...rest }: Props) => {
  return (
    <div css={container}>
      {userInfo && (
        <div css={wrapper}>
          <h5 css={name}>{userInfo.name}</h5>
          {userInfo.isFriend && <p css={tag}>친구</p>}
          <p css={position}>{userInfo.position}</p>
        </div>
      )}
    </div>
  );
};

export default Header;

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 16px;
  border-bottom: 1px solid #a9a9a9;
  padding: 16px 0;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.15);
`;

const wrapper = css`
  border-left: 2px solid #e5eaff;
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

const name = css`
  font-size: 24px;
  font-weight: 600;
`;
const tag = css`
  color: #fff;
  font-size: 12px;
  background-color: #0ae0d1;
  border-radius: 20px;
  padding: 4px 8px;
  height: fit-content;
  margin-top: 5px;
`;
const position = css`
  color: #5a7aff;
  width: 100%;
`;
