/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, useEffect, useMemo, useState } from "react";
import { RoundButton, SearchInput } from "../../../components";
import useTalksStore from "../../../store/useTalksStore";
import { TalkInfo } from "../../../types/talk";
import TalkInfoItem from "./TalkInfoItem";

const TODAY = new Date();

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TalkList = ({ ...rest }: Props) => {
  const { talkList: list, getTalkList, setSelectedTalk } = useTalksStore();
  const unreadTalksCount = useMemo(
    () => list.filter((item) => item.isUnread).length,
    [list]
  );
  const [filteredList, setFilteredList] = useState<TalkInfo[]>(list);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (list.length === 0) getTalkList();
  }, []);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleClickTalkItem = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const item = target.closest("li");
    const userId = item?.dataset.userId;
    const targetTalkInfo = list.find((item) => item.user.id === userId);
    if (targetTalkInfo) setSelectedTalk(targetTalkInfo);
  };

  const handleChangeSearchInputValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setSearchValue(value);

    if (value === "") return setFilteredList(list);
    const filteredList = list.filter((item) => item.user.name.includes(value));
    setFilteredList(filteredList);
  };

  return (
    <div css={[container]} {...rest}>
      <div css={header}>
        <p>{`안 읽은 대화(${unreadTalksCount})`}</p>
        <RoundButton>+ 새로운 메세지</RoundButton>
      </div>
      <div css={talkListWrap}>
        <SearchInput
          placeholder="대화 친구 검색하기"
          value={searchValue}
          onChange={handleChangeSearchInputValue}
        />
        <ul css={talkList} onClick={handleClickTalkItem}>
          {filteredList.map((talkInfo, idx) => (
            <TalkInfoItem
              today={TODAY}
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
