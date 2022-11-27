import { friendList, myProfile } from "../dummy";
import base from "./base";
const getUserProfile = () => {
  //  const data =  base.get<UserInfo>(`/user/profile`);
  const data = myProfile;
  return data;
};
const getFriendsList = () => {
  //  const data =  base.get<GetTalkListRes>(`/user/friends`);
  const data = friendList;
  return data;
};
export default { getFriendsList, getUserProfile };
