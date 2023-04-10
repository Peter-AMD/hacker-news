import { FC, ReactElement } from "react";

import styles from "./Main.module.scss";
import { EmojisBG } from "@/components/molecules";

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[] | ReactElement[];
};

const emojis = [
  "😀",
  "😂",
  "😍",
  "😎",
  "🤔",
  "🤢",
  "😴",
  "😷",
  "👻",
  "🎃",
  "😀",
  "😂",
  "😍",
  "😎",
  "🤔",
  "🤢",
  "😴",
  "😷",
  "👻",
  "🎃",
];
export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={`main-layout ${styles["main-layout"]}`}>
      <EmojisBG emojis={emojis} />
      {children}
    </div>
  );
};
