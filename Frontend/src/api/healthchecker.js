import API from "./axios";

export const checkHealth = async () => {
  const res = await API.get("/healthcheck");
  return res.data;
};
