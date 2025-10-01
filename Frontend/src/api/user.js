import API from "./axios";

// Get user by ID
export const getUserById = async (userId) => {
  const res = await API.get(`/users/${userId}`);
  return res.data;
};
