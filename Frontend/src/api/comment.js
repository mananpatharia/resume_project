import API from "./axios";

export const getVideoComments = async (videoId) => {
  const res = await API.get(`/comments/video/${videoId}`);
  return res.data;
};

export const addComment = async (videoId, content) => {
  const res = await API.post(`/comments/video/${videoId}`, { content });
  return res.data;
};
