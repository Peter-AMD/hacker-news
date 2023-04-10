import { useCallback } from "react";
import { getStory, getTopStories, getUser } from "@/apis";
import { useQueries, useQuery } from "@tanstack/react-query";
import { pickItemsInList } from "@/utils";
import { stampToDateString } from "@/utils/date";
import { imagesLink } from "@/constants/image";

export type NewsListType = {
  title: string;
  url: string;
  date: string;
  score: number;
  authorId: string;
  authorKarmaScore: number;
  imageUrl: string;
};

const useGetNewsList = () => {
  const callbackedItems = useCallback(
    (data: number[]) => pickItemsInList(data, 5),
    []
  );
  const { data: topStoriesIds } = useQuery({
    queryKey: ["topStories"],
    queryFn: getTopStories,
    select: callbackedItems,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const stories = useQueries({
    queries: (topStoriesIds || []).map((item) => ({
      queryKey: ["story", item],
      queryFn: getStory,
      enabled: Boolean(item),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    })),
  });

  const users = useQueries({
    queries: (stories || []).map((item) => ({
      queryKey: ["user", item.data?.by],
      queryFn: getUser,
      enabled: item.isSuccess,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    })),
  });
  // console.log("topStoriesQuery", topStoriesQuery.data);
  // console.log("stories", stories);
  // console.log("users", users);
  // console.log("stories", stories);

  return stories.map(({ data: storyData }, key) => {
    const storyAuthor = users.find(({ data }) => data?.id === storyData?.by);

    return {
      title: storyData?.title,
      url: storyData?.url,
      date: stampToDateString(storyData?.time || 0),
      score: storyData?.score,
      authorId: storyData?.by,
      authorKarmaScore: storyAuthor?.data?.karma,
      imageUrl: imagesLink[key],
    } as NewsListType;
  });
};
export default useGetNewsList;
