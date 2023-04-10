type UsersResponse = {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
};

type ParamType = {
  queryKey: any[];
};

const getUser = async ({ queryKey }: ParamType): Promise<UsersResponse> => {
  const userId = queryKey[queryKey.length - 1];
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/user/${userId}.json`
    );
    return response.json();
  } catch (e) {
    throw new Error(`error: ${e}`);
  }
};

export default getUser;
