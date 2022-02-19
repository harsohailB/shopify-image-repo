import axios from "axios";

export const getAllImages = async () => {
  const response = await axios.get("/images");

  if (response.status !== 200) {
    throw "getAllImages failed " + response.status;
  }

  return response.data;
};

export const getPersonalImages = async (user_id, auth_token) => {
  const response = await axios.get(`/images/${user_id}`, {
    params: { auth_token }
  });

  if (response.status !== 200) {
    throw "getPersonalImages failed " + response.status;
  }

  return response.data;
};

export const createImage = async (
  user_id,
  name,
  description,
  image_url,
  publicPermissions,
  auth_token
) => {
  const body = {
    user_id,
    name,
    description,
    image_url,
    public: publicPermissions
  };

  const response = await axios.post(
    "/images",
    { ...body },
    {
      params: { auth_token }
    }
  );

  if (response.status !== 200) {
    throw new Error(response.error);
  }

  return response.data;
};

export const deleteImage = async (imageId, user_id, auth_token) => {
  const response = await axios.delete(`/images/${imageId}`, {
    params: { user_id, auth_token }
  });

  if (response.status !== 204) {
    throw "deleteImage failed" + response.status;
  }

  return response.data;
};
