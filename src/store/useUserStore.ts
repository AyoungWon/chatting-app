import { UserInfo } from "./../types/user";
import create from "zustand";
import api from "../api";

interface UserState {
  userInfo?: UserInfo;
  setUserInfo: (info: UserInfo) => void;
}

const useUserStore = create<UserState>((set, get) => ({
  userInfo: {
    id: "asdasd-asdasd-adsadas-gdfg99",
    name: "원아영",
    profileImage: "https://avatars.githubusercontent.com/u/64050853?v=4",
  },
  setUserInfo: (userInfo) => {
    set(() => ({ userInfo }));
  },
}));

export default useUserStore;
