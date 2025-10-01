import API from "./axios";

export const toggleVideoLike = async (videoId) => {
  const res = await API.post(`/likes/video/${videoId}`);
  return res.data;
};

export const toggleCommentLike = async (commentId) => {
  const res = await API.post(`/likes/comment/${commentId}`);
  return res.data;
};
