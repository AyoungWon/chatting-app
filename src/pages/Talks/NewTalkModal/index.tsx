/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, useEffect, useState } from "react";
import { RoundButton, SearchInput } from "../../../components";
import useTalksStore from "../../../store/useTalksStore";
import useUserStore from "../../../store/useUserStore";
import { UserInfo } from "../../../types/user";
import Friend from "./Friend";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const NewTalkModal = ({ ...rest }: Props) => {
  const {
    isNewTalkModalOpen: isOpenModal,
    toggleNewTalkModal,
    selectedNewTalk,
  } = useTalksStore();
  const { friendList, setFriendsList } = useUserStore();
  const [filteredList, setFilteredList] = useState<UserInfo[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilteredList(friendList);
  }, [friendList]);

  useEffect(() => {
    setFriendsList();
  }, []);

  const handleChangeSearchInputValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setSearchValue(value);

    if (value === "") return setFilteredList(friendList);
    const filteredList = friendList.filter((item) => item.name.includes(value));
    setFilteredList(filteredList);
  };

  const handleCloseModal = () => {
    toggleNewTalkModal();
  };

  const handleClickTalkItem = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const item = target.closest("li");
    const userId = item?.dataset.userId;

    const userInfo = filteredList.find((friend) => friend.id === userId);
    if (userInfo) selectedNewTalk(userInfo);
  };
  return isOpenModal ? (
    <div css={background}>
      <div css={container}>
        <h4 css={title}>대화 상대 선택하기</h4>
        <SearchInput
          value={searchValue}
          onChange={handleChangeSearchInputValue}
          placeholder="친구 이름 검색"
        />
        <ul css={listWrap} onClick={handleClickTalkItem}>
          {filteredList.map((friend) => (
            <Friend key={`friend_${friend.id}`} data={friend} />
          ))}
        </ul>
        <RoundButton
          style={{ width: "100%", marginTop: "12px" }}
          onClick={handleCloseModal}
        >
          닫기
        </RoundButton>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NewTalkModal;

const background = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000070;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const container = css`
  border-radius: 20px;
  background-color: #fff;
  padding: 24px;
  min-width: 320px;
`;

const title = css`
  width: 100%;
  text-align: center;
  color: #5a7aff;
  font-weight: 600;
  padding-bottom: 24px;
  border-bottom: 1px solid #a9a9a9;
`;

const listWrap = css`
  height: 520px;
  overflow-y: auto;
`;
