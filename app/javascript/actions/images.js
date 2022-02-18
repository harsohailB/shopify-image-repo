import axios from "axios";

export const getPublicImages = async () => {
  const response = await axios.get("/images", {
    params: { public: true }
  });

  if (response.status !== 200) {
    throw "getPublicImages failed " + response.status;
  }

  return response.data;
};
