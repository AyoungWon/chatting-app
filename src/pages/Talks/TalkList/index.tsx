/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, useEffect, useMemo } from "react";
import { RoundButton } from "../../../components";
import useTalksStore from "../../../store/useTalksStore";
import SearchInput from "./SearchInput";
import TalkInfo from "./TalkInfoItem";

const today = new Date();

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TalkList = ({ ...rest }: Props) => {
  const { talkList: list, getTalkList, setSelectedTalk } = useTalksStore();
  const unreadTalksCount = useMemo(
    () => list.filter((item) => item.isUnread).length,
    [list]
  );

  useEffect(() => {
    if (list.length === 0) getTalkList();
  }, []);

  const handleClickTalkItem = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const item = target.closest("li");
    const userId = item?.dataset.userId;
    const targetTalkInfo = list.find((item) => item.user.id === userId);
    if (targetTalkInfo) setSelectedTalk(targetTalkInfo);
  };

  return (
    <div css={[container]} {...rest}>
      <div css={header}>
        <p>{`안 읽은 대화(${unreadTalksCount})`}</p>
        <RoundButton>+ 새로운 메세지</RoundButton>
      </div>
      <div css={talkListWrap}>
        <SearchInput />
        <ul css={talkList} onClick={handleClickTalkItem}>
          {list.map((talkInfo, idx) => (
            <TalkInfo
              today={today}
              isLast={idx === list.length - 1}
              data={talkInfo}
              key={`talk_list_user_${talkInfo.user.id}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TalkList;

const container = css`
  height: 100%;
  overflow-y: auto;
  width: 420px;
  display: flex;
  flex-direction: column;
`;

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 16px;
  border-bottom: 1px solid #a9a9a9;
`;

const talkListWrap = css`
  flex: 1;
  width: 100%;
  border-right: 1px solid #a9a9a9;
`;

const talkList = css`
  width: 100%;
`;
