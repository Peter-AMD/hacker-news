import { FC } from "react";

import { EmojiBG } from "@/components/atoms";
import style from "./EmojisBG.module.scss";

const emojis = ["😀", "😂", "😍", "😎", "🤔", "🤢", "😴", "😷", "👻", "🎃"];

type EmojisBGProps = {
  emojis: string[];
};
export const EmojisBG: FC<EmojisBGProps> = ({ emojis }) => {
  return (
    <div className={style.container}>
      {emojis.map((emoji, key) => (
        <EmojiBG key={key}>{emoji}</EmojiBG>
      ))}
    </div>
  );
};
