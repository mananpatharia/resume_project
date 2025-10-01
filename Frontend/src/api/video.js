import API from "./axios";

export const getAllVideos = async (params) => {
  const res = await API.get("/videos", { params });
  return res.data;
};

export const getVideoById = async (videoId) => {
  const res = await API.get(`/videos/${videoId}`);
  return res.data;
};

export const publishVideo = async (formData) => {
  const res = await API.post("/videos", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
