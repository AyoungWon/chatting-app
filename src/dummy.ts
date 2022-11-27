import { TalkContent, TalkInfo } from "./types/talk";
const today = new Date();

const year = today.getFullYear(); // 년
const month = today.getMonth(); // 월
const day = today.getDate(); // 일

export const myProfile = {
  id: "asdasd-asdasd-adsadas-gdfg99",
  name: "원아영",
  profileImage: "https://avatars.githubusercontent.com/u/64050853?v=4",
  position: "FE developer",
};

export const talkList: TalkInfo[] = [
  {
    user: {
      position: "웹앱 UX 디자이너",
      isFriend: true,
      id: "asdasd-asdasd-adsadas-gdfgd1",
      name: "김펀치",
      profileImage:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    },
    lastMessage: "안녕하세요. 테스트입니다.",
    recentDate: new Date(year, month, day),
    isUnread: true,
  },
  {
    user: {
      position: "PM",
      isFriend: true,
      id: "asdasd-asdasd-adsadas-gdfgd2",
      name: "Ronald",
      profileImage:
        "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250",
    },
    lastMessage: "Hello! ayoung! Could you check the email I sent you?",
    recentDate: new Date(year, month, day - 2),
    isUnread: true,
  },
  {
    user: {
      isFriend: false,
      id: "asdasd-asdasd-adsadas-gdfgd3",
      name: "Gravatar.official",
      profileImage:
        "https://www.gravatar.com/avatar/f9879d71855b5ff21e4963273a886bfc?s=250",
    },
    lastMessage: "안녕하세요. Gravatar입니다. 무엇을 도와드릴까요?",
    recentDate: new Date(year, month - 1, day - 1),
    isUnread: false,
  },
  {
    user: {
      position: "BE developer",
      isFriend: true,
      id: "asdasd-asdasd-adsadas-gdfgd4",
      name: "윤아드리엘",
      profileImage:
        "https://www.gravatar.com/avatar/be8819126bd50fa16210bc5dd249beb2?s=250",
    },
    lastMessage:
      "안녕하세요. 윤아드리엘입니다. 문의드릴 사항이 있어 연락 드렸습니다.",
    recentDate: new Date(year, month - 2, day - 1),
    isUnread: false,
  },
  {
    user: {
      position: "manager",
      isFriend: true,
      id: "asdasd-asdasd-adsadas-gdfgd5",
      name: "Ann",
      profileImage:
        "https://2.gravatar.com/avatar/67c5ef957e55a650cbe65dda6f31a380?s=250",
    },
    lastMessage: "Yes. No problem.",
    recentDate: new Date(year, month - 2, day - 2),
    isUnread: false,
  },
  {
    user: {
      isFriend: true,
      id: "asdasd-asdasd-adsadas-gdfgd6",
      name: "한국인",
      profileImage:
        "https://www.gravatar.com/avatar/4e8763cd343611171849e8f27d0132a3?s=250",
    },
    lastMessage: "아영! 저번에 물어본 얘기말이야. 아직 결정난 것 없데.",
    recentDate: new Date(year, month - 3, day - 10),
    isUnread: false,
  },
];

export const talkContentsByUser: { [userId in string]: TalkContent[] } = {
  "asdasd-asdasd-adsadas-gdfgd1": [
    {
      user: {
        position: "웹앱 UX 디자이너",
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfgd1",
        name: "김펀치",
        profileImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      },
      content: "안녕하세요. 금일 미팅에서 진행할 줌 링크 보내드립니다..",
      time: new Date(year, month, day - 1),
    },

    {
      user: {
        position: "웹앱 UX 디자이너",
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfg99",
        name: "원아영",
        profileImage: "https://avatars.githubusercontent.com/u/64050853?v=4",
      },
      content: "안녕하세요. 확인했습니다.",
      time: new Date(year, month, day - 1),
    },
    {
      user: {
        position: "웹앱 UX 디자이너",
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfgd1",

        name: "김펀치",
        profileImage:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      },
      content: "안녕하세요. 테스트입니다.",
      time: new Date(year, month, day),
    },
  ],
  "asdasd-asdasd-adsadas-gdfgd2": [
    {
      user: {
        position: "PM",
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfgd2",
        name: "Ronald",
        profileImage:
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250",
      },
      content: "Hello! ayoung! Could you check the email I sent you?",
      time: new Date(year, month, day - 2),
    },
  ],

  "asdasd-asdasd-adsadas-gdfgd3": [
    {
      user: {
        isFriend: false,
        id: "asdasd-asdasd-adsadas-gdfgd3",
        name: "Gravatar.official",
        profileImage:
          "https://www.gravatar.com/avatar/f9879d71855b5ff21e4963273a886bfc?s=250",
      },
      content: "안녕하세요. Gravatar입니다. 무엇을 도와드릴까요?",
      time: new Date(year, month - 1, day - 1),
    },
  ],

  "asdasd-asdasd-adsadas-gdfgd4": [
    {
      user: {
        position: "BE developer",
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfgd4",
        name: "윤아드리엘",
        profileImage:
          "https://www.gravatar.com/avatar/be8819126bd50fa16210bc5dd249beb2?s=250",
      },
      content:
        "안녕하세요. 윤아드리엘입니다. 문의드릴 사항이 있어 연락 드렸습니다.",
      time: new Date(year, month - 2, day - 1),
    },
  ],

  "asdasd-asdasd-adsadas-gdfgd5": [
    {
      user: {
        position: "manager",
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfgd5",
        name: "Ann",
        profileImage:
          "https://2.gravatar.com/avatar/67c5ef957e55a650cbe65dda6f31a380?s=250",
      },
      content: "Can we postpone the meeting by an hour?",
      time: new Date(year, month - 2, day - 2),
    },
    {
      user: {
        position: "웹앱 UX 디자이너",
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfg99",
        name: "원아영",
        profileImage: "https://avatars.githubusercontent.com/u/64050853?v=4",
      },
      content: "Yes. No problem.",
      time: new Date(year, month - 2, day - 2),
    },
  ],

  "asdasd-asdasd-adsadas-gdfgd6": [
    {
      user: {
        isFriend: true,
        id: "asdasd-asdasd-adsadas-gdfgd6",
        name: "한국인",
        profileImage:
          "https://www.gravatar.com/avatar/4e8763cd343611171849e8f27d0132a3?s=250",
      },
      content: "아영! 저번에 물어본 얘기말이야. 아직 결정난 것 없데.",
      time: new Date(year, month - 3, day - 10),
    },
  ],
};
