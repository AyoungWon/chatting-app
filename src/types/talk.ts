import { UserInfo } from "./user";

export type TalkInfo = {
  user: UserInfo;
  recentDate: Date;
  lastMessage: string;
  isUnread: boolean;
};

export type TalkContent = {
  time: Date;
  content: string;
  user: UserInfo;
};
