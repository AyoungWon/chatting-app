/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import NewTalkModal from "./NewTalkModal";
import TalkContents from "./TalkContents";
import TalkList from "./TalkList";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Talks = ({ ...rest }: Props) => {
  return (
    <div css={[container]} {...rest}>
      <TalkList />
      <TalkContents />
      <NewTalkModal />
    </div>
  );
};

export default Talks;

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0;
`;
