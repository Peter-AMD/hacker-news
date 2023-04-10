export const pickItemsInList = <T>(list: T[], count: number): T[] => {
  return list.sort(() => 0.5 - Math.random()).slice(0, count);
};
