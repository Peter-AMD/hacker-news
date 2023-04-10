export const stampToDateString = (stamp: EpochTimeStamp | null) => {
  if (!stamp) return null;
  const date = new Date(stamp * 1000);

  return date.toDateString();
};
