import { UserInfo } from "./../types/user";
import { TalkContent, TalkInfo } from "./../types/talk";
import create from "zustand";
import api from "../api";
import produce from "immer";

interface TalksState {
  talkList: TalkInfo[];
  selectedTalk?: { talkInfo: TalkInfo; contents: TalkContent[] };
  isNewTalkModalOpen: boolean;
  getTalkList: () => void;
  setSelectedTalk: (talkInfo: TalkInfo) => void;
  sendMessage: (me: UserInfo, message: string) => void;
  toggleNewTalkModal: () => void;
  selectedNewTalk: (friendInfo: UserInfo) => void;
}

const useTalksStore = create<TalksState>((set, get) => ({
  talkList: [],
  isNewTalkModalOpen: true,
  getTalkList: async () => {
    const talkList = await api.talk.getTalkList();
    set(() => ({ talkList: talkList }));
  },
  setSelectedTalk: async (talkInfo) => {
    const talkContentsList = await api.talk.getTalkContentList(
      talkInfo.user.id
    );
    const talkList = get().talkList;
    const selectedTalkItemIsUnreadIndex = talkList.findIndex(
      (talk) => talk.isUnread && talk.user.id === talkInfo.user.id
    );

    if (selectedTalkItemIsUnreadIndex >= 0) {
      const nextState = produce(talkList, (draftState) => {
        draftState[selectedTalkItemIsUnreadIndex].isUnread = false;
      });

      return set(() => ({
        selectedTalk: { talkInfo, contents: talkContentsList },
        talkList: nextState,
      }));
    }
    set(() => ({ selectedTalk: { talkInfo, contents: talkContentsList } }));
  },
  sendMessage: async (me, message) => {
    const now = new Date();
    //서버로 보내기
    const selectedTalk = get().selectedTalk;
    if (selectedTalk) {
      set(() => ({
        selectedTalk: {
          ...selectedTalk,
          contents: [
            ...selectedTalk.contents,
            { user: me, time: now, content: message },
          ],
        },
      }));
    }
  },
  toggleNewTalkModal: () => {
    const isNewTalkModalOpen = get().isNewTalkModalOpen;
    set(() => ({ isNewTalkModalOpen: !isNewTalkModalOpen }));
  },
  selectedNewTalk: (friendInfo) => {
    const { talkList, setSelectedTalk, toggleNewTalkModal } = get();
    const existTalk = talkList.find((talk) => talk.user.id === friendInfo.id);
    if (existTalk) {
      setSelectedTalk(existTalk);
    } else {
      const newTalkInfo = {
        user: friendInfo,
        isUnread: false,
        lastMessage: "",
        recentDate: new Date(),
      };
      set(() => ({
        talkList: [...talkList, newTalkInfo],
        selectedTalk: { talkInfo: newTalkInfo, contents: [] },
      }));
    }
    toggleNewTalkModal();
  },
}));
export default useTalksStore;
