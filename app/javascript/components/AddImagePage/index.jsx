import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createImage } from "../../actions/images";
import { UserContext } from "../../contexts/UserContext";
import ImagePreview from "../Catalog/ImagePreview";

const AddImagePage = () => {
  const [user] = useContext(UserContext);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    image_url: "",
    public: false
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onFormChange = (event) => {
    let value;
    if (event.target.name == "public") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hasErrors()) return;

    createImage(
      user.id,
      formState.name,
      formState.description,
      formState.image_url,
      formState.public,
      user.auth_token
    ).then((response) => navigate("/account"));
  };

  const hasErrors = () => {
    if (formState.name.length == 0 || formState.image_url.length == 0) {
      return true;
    }

    return false;
  };

  return (
    <div className="h-full flex flex-col items-center">
      <div className="w-1/2">
        <h3 className="font-bold text-4xl my-8">Add Image</h3>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3 focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Mona Lisa"
              value={formState.name}
              onChange={onFormChange}
            />
            {formState.name.length == 0 && (
              <p className="text-red-500 text-xs italic">
                Please enter a name.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              type="text"
              placeholder="Sell it as an NFT"
              value={formState.description}
              onChange={onFormChange}
            />
          </div>
          <div className="mb-6 w-100">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="image_url"
              name="image_url"
              type="url"
              placeholder="https://loremflickr.com/300/300"
              value={formState.image_url}
              onChange={onFormChange}
            />
            {formState.image_url.length == 0 && (
              <p className="text-red-500 text-xs italic">
                Please enter an image url.
              </p>
            )}
          </div>

          <div className="md:flex md:items-center mb-6">
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                name="public"
                value={formState.public}
                onChange={onFormChange}
              />
              <span className="text-sm">Public</span>
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Preview
            </label>
            <ImagePreview url={formState.image_url} />
          </div>

          <div className="flex items-center justify-between mt-8">
            <input
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Add"
            />
          </div>
          {error && <p className="mt-4 text-red-500 text-xs italic">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddImagePage;
