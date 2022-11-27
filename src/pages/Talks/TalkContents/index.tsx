/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import useTalksStore from "../../../store/useTalksStore";
import Header from "./Header";
import TalkContentItem from "./TalkContentItem";

interface Props extends HTMLAttributes<HTMLDivElement> {}
const myId = "asdasd-asdasd-adsadas-gdfg99";
const TalkContents = ({ ...rest }: Props) => {
  const talkContent = useTalksStore((store) => store.selectedTalk);

  return (
    <div css={[container]} {...rest}>
      <Header userInfo={talkContent?.talkInfo.user} />
      {talkContent ? (
        <div css={contentsWrap}>
          {talkContent.contents.map((talkContentItem, idx) => {
            return (
              <TalkContentItem
                key={`talk_with_${talkContentItem.user.id}_${talkContentItem.time}`}
                data={talkContentItem}
                isMine={myId === talkContentItem.user.id}
              />
            );
          })}
        </div>
      ) : (
        <>{/*todo  없을 때 화면 만들기 */}</>
      )}
    </div>
  );
};

export default TalkContents;

const container = css`
  height: 100%;
  overflow-y: auto;
  flex: 1;
  min-width: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const contentsWrap = css`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
`;

const dateMrk = css`
  margin: 24px;
  width: 100%;
  height: 1px;
  background-color: #a9a9a9;
`;
