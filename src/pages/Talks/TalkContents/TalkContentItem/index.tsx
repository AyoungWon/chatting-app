/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { TalkContent } from "../../../../types/talk";

const PROFILE_IMAGE_SIZE = 32;
interface Props extends HTMLAttributes<HTMLLIElement> {
  data: TalkContent;
  isMine: boolean;
}

const TalkContentItem = ({ data, isMine, ...rest }: Props) => {
  return (
    <li css={[container, isMine && myItem]} {...rest}>
      <div>
        <button css={imageWrap}>
          <img
            src={data.user.profileImage}
            alt={`talk_content_user_${
              data.user.id
            }_${data.time.toLocaleString()}`}
            css={img}
          />
        </button>
      </div>
      <div css={contentWarp}>
        <p css={[name, isMine && myName]}>{data.user.name}</p>
        <p css={content}>{data.content}</p>
        <p css={time}>- {data.time.toLocaleTimeString()}</p>
      </div>
    </li>
  );
};

export default TalkContentItem;
const container = css`
  padding: 12px 24px;
  display: flex;
  gap: 12px;
  margin: 24px 0;
`;

const myItem = css`
  flex-direction: row-reverse;
`;

const imageWrap = css`
  width: ${PROFILE_IMAGE_SIZE}px;
  height: ${PROFILE_IMAGE_SIZE}px;
  border-radius: 50%;
  overflow: hidden;
`;

const img = css`
  width: 100%;
`;

const name = css`
  height: ${PROFILE_IMAGE_SIZE}px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

const myName = css`
  justify-content: flex-end;
`;

const contentWarp = css`
  max-width: 320px;
`;

const content = css`
  line-height: 1.5rem;
`;
const time = css`
  font-size: 12px;
  color: #a9a9a9;
  margin-top: 6px;
`;
