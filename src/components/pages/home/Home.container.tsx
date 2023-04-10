import { FC, useState } from "react";
import HomeView from "./Home.view";
import { useGetNewsList } from "@/hooks";

export const HomeContainer: FC<{}> = () => {
  const [previewId, setPreviewId] = useState("");
  const newsList = useGetNewsList();

  return newsList ? (
    <HomeView
      newsList={newsList}
      previewId={previewId}
      setPreviewId={setPreviewId}
    />
  ) : null;
};
