import { talkList, talkContentsByUser } from "../dummy";
import base from "./base";
import { GetTalkListRes } from "./type";

const getTalkList = () => {
  //  const data =  base.get<GetTalkListRes>(`/talk/list`);
  const data = talkList;
  return data;
};

const getTalkContentList = (targetUserId: string) => {
  //const data = base.get<TalkContent[]>(`talk/contents/${targetUserId}`);
  const data = talkContentsByUser[targetUserId];
  return data ?? [];
};

export default { getTalkList, getTalkContentList };
