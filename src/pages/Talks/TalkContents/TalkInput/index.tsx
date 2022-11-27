/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, useRef, useState } from "react";
import { RoundButton } from "../../../../components";
import useTalksStore from "../../../../store/useTalksStore";
import useUserStore from "../../../../store/useUserStore";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const TalkInput = ({ ...rest }: Props) => {
  const user = useUserStore((store) => store.userInfo!);
  const sendMessage = useTalksStore((store) => store.sendMessage);
  const [message, setMessage] = useState<string>("");

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //todo throttle
    const value = e.target.value;
    setMessage(value);
  };

  const handleSendMessage = () => {
    if (message.length === 0) return;
    sendMessage(user, message);
    setMessage("");
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div css={[container]} {...rest}>
      <div css={wrapper}>
        <textarea
          ref={inputRef}
          onChange={handleChangeMessage}
          css={textarea}
          placeholder="내용을 작성해 주세요"
          value={message}
        />
        <div css={buttonWrap}>
          <RoundButton size="s" onClick={handleSendMessage}>
            보내기
          </RoundButton>
        </div>
      </div>
    </div>
  );
};

export default TalkInput;

const container = css`
  padding: 24px;
  width: 100%;
`;

const wrapper = css`
  border: 1px solid #a9a9a9;
  border-radius: 4px;
`;
const textarea = css`
  height: 120px;
  width: 100%;
  padding: 12px;
  border: none;
  resize: none;
`;
const buttonWrap = css`
  padding: 12px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #a9a9a9;
`;
