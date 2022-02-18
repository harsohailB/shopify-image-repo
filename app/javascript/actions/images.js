import axios from "axios";

export const getImages = async (publicPermissions, user_id) => {
  const params = {
    public: publicPermissions
  };

  if (!publicPermissions) {
    params.user_id = user_id;
  }

  const response = await axios.get("/images", { params });

  if (response.status !== 200) {
    throw "getImages failed " + response.status;
  }

  return response.data;
};

export const createImage = async (
  user_id,
  name,
  description,
  image_url,
  publicPermissions
) => {
  const body = {
    user_id,
    name,
    description,
    image_url,
    public: publicPermissions
  };

  const response = await axios.post("/images", { ...body });

  if (response.status !== 200) {
    throw new Error(response.error);
  }

  return response.data;
};

export const deleteImage = async (imageId) => {
  const response = await axios.delete(`/images/${imageId}`);

  if (response.status !== 204) {
    throw "deleteImage failed" + response.status;
  }

  return response.data;
};
