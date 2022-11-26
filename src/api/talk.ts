import { talkList } from "../dummy";
import base from "./base";
import { GetTalkListRes } from "./type";

const getTalkList = () => {
  //  const data =  base.get<GetTalkListRes>(`/talk/list`);
  const data = talkList;
  return data;
};

export default { getTalkList };
