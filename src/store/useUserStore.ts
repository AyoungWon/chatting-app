import { myProfile } from "./../dummy";
import { UserInfo } from "./../types/user";
import create from "zustand";
import api from "../api";

interface UserState {
  userInfo?: UserInfo;
  friendList: UserInfo[];
  setUserInfo: () => void;
  setFriendsList: () => void;
}

const useUserStore = create<UserState>((set, get) => ({
  userInfo: myProfile,
  friendList: [],
  setUserInfo: async () => {
    const userInfo = await api.user.getUserProfile();
    set(() => ({ userInfo }));
  },
  setFriendsList: async () => {
    const friendList = await api.user.getFriendsList();
    set(() => ({ friendList }));
  },
}));

export default useUserStore;
