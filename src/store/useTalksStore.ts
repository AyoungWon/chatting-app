import { TalkInfo } from "./../types/talk";
import create from "zustand";
import api from "../api";

interface TalksState {
  talkList: TalkInfo[];
  selectedTalk?: { talkInfo: TalkInfo; contents: [] };
  getTalkList: () => void;
  setSelectedTalk: (talkInfo: TalkInfo) => void;
}

const useTalksStore = create<TalksState>((set) => ({
  talkList: [],
  getTalkList: async () => {
    const talkList = await api.talk.getTalkList();
    set(() => ({ talkList: talkList }));
  },
  setSelectedTalk: async (talkInfo) => {
    const talkContentsList = await api.talk.getTalkContentList(
      talkInfo.user.id
    );
    set(() => ({ selectedTalk: { talkInfo, contents: [] } }));
  },
}));

export default useTalksStore;
