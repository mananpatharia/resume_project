export const handleResponse = (response) => {
  if (response && response.data) {
    return response.data;
  }
  return null;
};
