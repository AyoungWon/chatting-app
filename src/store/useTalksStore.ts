import { UserInfo } from "./../types/user";
import { TalkContent, TalkInfo } from "./../types/talk";
import create from "zustand";
import api from "../api";

interface TalksState {
  talkList: TalkInfo[];
  selectedTalk?: { talkInfo: TalkInfo; contents: TalkContent[] };
  getTalkList: () => void;
  setSelectedTalk: (talkInfo: TalkInfo) => void;
  sendMessage: (me: UserInfo, message: string) => void;
}

const useTalksStore = create<TalksState>((set, get) => ({
  talkList: [],
  getTalkList: async () => {
    const talkList = await api.talk.getTalkList();
    set(() => ({ talkList: talkList }));
  },
  setSelectedTalk: async (talkInfo) => {
    const talkContentsList = await api.talk.getTalkContentList(
      talkInfo.user.id
    );
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
}));

export default useTalksStore;
