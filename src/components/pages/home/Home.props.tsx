import { NewsListType } from "@/hooks/getNewsList";
import { Dispatch, SetStateAction } from "react";

export type HomeViewProps = {
  previewId: string;
  setPreviewId: Dispatch<SetStateAction<string>>;
  newsList: NewsListType[];
};
