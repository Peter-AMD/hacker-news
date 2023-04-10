import { NewsListType } from "@/hooks/getNewsList";
import { Dispatch, SetStateAction } from "react";

export type NewsItemProps = {
  previewId: string;
  setPreviewId: Dispatch<SetStateAction<string>>;
} & NewsListType;
