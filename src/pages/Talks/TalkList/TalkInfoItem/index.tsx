/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, useMemo } from "react";
import useTalksStore from "../../../../store/useTalksStore";
import { TalkInfo } from "../../../../types/talk";

interface Props extends HTMLAttributes<HTMLLIElement> {
  data: TalkInfo;
  isLast: boolean;
  today: Date;
}

const TalkInfoItem = ({ data, isLast, today, ...rest }: Props) => {
  const { selectedTalk } = useTalksStore();
  const { user, lastMessage, recentDate } = useMemo(() => data, [data]);
  const isRead = useMemo(() => !data.isUnread, [data.isUnread]);
  const isSelected = useMemo(
    () => selectedTalk?.talkInfo.user.id === data.user.id,
    [selectedTalk, data.user.id]
  );
  const timeMark = useMemo(
    () =>
      today.toLocaleDateString() === recentDate.toLocaleDateString()
        ? recentDate.toLocaleTimeString()
        : recentDate.toLocaleDateString(),
    [today, recentDate]
  );
  return (
    <li
      data-user-id={data.user.id}
      css={[container, isLast && lastItem, isRead && readItem]}
    >
      <div css={[bar, isSelected && selectedItemBar]} />
      <div css={imageWrap}>
        <img
          css={img}
          src={user.profileImage}
          alt={`user_profile_${user.id}`}
        />
      </div>
      <div css={contentsWrap}>
        <h5 css={username}>{user.name}</h5>
        <p css={time}>{timeMark}</p>
        <p css={text}>{lastMessage}</p>
      </div>
    </li>
  );
};

export default TalkInfoItem;

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  width: 100%;
  height: 120px;
  border: 1px solid #a9a9a9;
  border-bottom: none;
  padding-right: 16px;
`;

const lastItem = css`
  border: 1px solid #a9a9a9;
`;

const readItem = css`
  opacity: 0.7;
  background-color: #e9e9e9;
`;

const bar = css`
  width: 6px;
  height: 100%;
  background-color: transparent;
`;

const selectedItemBar = css`
  background-color: #5a7aff;
`;
const imageWrap = css`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
`;

const img = css`
  width: 100%;
`;

const contentsWrap = css`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 4px;
`;

const username = css`
  font-weight: 600;
`;

const time = css`
  font-size: 14px;
  color: #a9a9a9;
`;

const text = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  color: #555;
`;
