type StoryResponse = {
  id: number;
  by: string;
  descendants: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

type ParamType = {
  queryKey: any[];
};
const getStory = async ({ queryKey }: ParamType): Promise<StoryResponse> => {
  const itemId = queryKey[queryKey.length - 1];
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`,
      { method: "GET" }
    );
    return response.json();
  } catch (e) {
    throw new Error(`error: ${e}`);
  }
};

export default getStory;
