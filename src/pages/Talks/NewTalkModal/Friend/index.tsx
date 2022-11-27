/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { UserInfo } from "../../../../types/user";

interface Props extends HTMLAttributes<HTMLLIElement> {
  data: UserInfo;
}

const Friend = ({ data, ...rest }: Props) => {
  return (
    <li css={[container]} {...rest} data-user-id={data.id}>
      <div css={imageWrap}>
        <img
          css={img}
          src={data.profileImage}
          alt={`friend_profile_image_${data.name}`}
        />
      </div>
      <div css={wrapper}>
        <h5 css={name}>{data.name}</h5>
        <p css={position}>{data.position}</p>
      </div>
    </li>
  );
};

export default Friend;

const container = css`
  width: 100%;
  border-top: 1px solid #a9a9a9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  height: fit-content;
`;
const imageWrap = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

const img = css`
  width: 100%;
`;
const wrapper = css`
  border-left: 2px solid #e5eaff;
  flex: 1;
  min-width: 0;
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

const position = css`
  color: #5a7aff;
  width: 100%;
`;
