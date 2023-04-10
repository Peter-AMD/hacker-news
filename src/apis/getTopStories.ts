const getTopStories = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    return response.json();
  } catch (e) {
    throw new Error(`error: ${e}`);
  }
};

export default getTopStories;
