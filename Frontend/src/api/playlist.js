import API from "./axios";

export const createPlaylist = async (data) => {
  const res = await API.post("/playlists", data);
  return res.data;
};

export const getUserPlaylists = async (userId) => {
  const res = await API.get(`/playlists/user/${userId}`);
  return res.data;
};

export const addVideoToPlaylist = async (playlistId, videoId) => {
  const res = await API.post(`/playlists/${playlistId}/add/${videoId}`);
  return res.data;
};
