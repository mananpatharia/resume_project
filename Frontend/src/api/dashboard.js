import API from "./axios";

export const getChannelStats = async () => {
  const res = await API.get("/dashboard/stats");
  return res.data;
};
