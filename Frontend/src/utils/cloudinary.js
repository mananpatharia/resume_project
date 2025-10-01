export const uploadToCloudinary = async (file, folder = "youtube-clone") => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // replace with your preset
  formData.append("folder", folder);

  const res = await fetch(`https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.secure_url;
};
