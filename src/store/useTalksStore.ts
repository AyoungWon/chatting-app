import { TalkInfo } from "./../types/talk";
import create from "zustand";
import api from "../api";

interface TalksState {
  // setUserProfile: (profile?: UserProfileType) => void;
  // user?: UserProfileType;
  talkList: TalkInfo[];
  getTalkList: () => void;
}

const useTalksStore = create<TalksState>((set) => ({
  talkList: [],
  getTalkList: async () => {
    const talkList = await api.talk.getTalkList();
    set(() => ({ talkList: talkList }));
  },
  // setUserProfile: profile => set(() => ({user: profile})),
}));

export default useTalksStore;
