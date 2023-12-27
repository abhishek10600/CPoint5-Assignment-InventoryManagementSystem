import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddItemForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmitButtonClick = async (ev) => {
    setLoading(true);
    ev.preventDefault();
    if (name !== "" && description !== "" && quantity !== "") {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("photo", photo[0]);
      try {
        const res = await axios.post(
          "http://localhost:4000/api/v1/inventory/grocery/addItem",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res.data.success === true) {
          setLoading(false);
          toast.success("Item added to inventory successfully.");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please enter all the required fields");
      setLoading(false);
    }
  };

  return (
    <form className="mx-48 my-8" onSubmit={handleFormSubmitButtonClick}>
      <div className="mt-2">
        <h2 className="text-2xl">Name</h2>
        <p className="text-sm text-gray-500">Name of the grocery item.</p>
        <input
          type="text"
          disabled={loading === true ? true : false}
          placeholder="Example:Apples"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-2xl">Description</h2>
        <p className="text-sm text-gray-500">
          Description of the grocery item.
        </p>
        <textarea
          placeholder="Example: Fresh apples from Kolkata..."
          disabled={loading === true ? true : false}
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-2xl">Quantity</h2>
        <p className="text-sm text-gray-500">
          Enter the quantity(in pcs) of the item
        </p>
        <input
          type="text"
          disabled={loading === true ? true : false}
          placeholder="Example:12"
          value={quantity}
          onChange={(ev) => setQuantity(ev.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-2xl">Photo</h2>
        <p className="text-sm text-gray-500">Enter one image of the item</p>
        <label className="block mt-2">
          <input
            type="file"
            disabled={loading === true ? true : false}
            className="cursor-pointer block w-full text-sm text-gray-500
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-[#3a7419] file:text-white
      hover:file:bg-[#3a7419]
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-[#3a7419]
      dark:hover:file:bg-[#91bb79]
    "
            onChange={(ev) => setPhoto(ev.target.files)}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={loading === true ? true : false}
        className="mt-8 py-6 w-full rounded-2xl bg-[#3a7419] text-white"
      >
        {loading === true ? (
          <div role="status" className="flex justify-center">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin fill-[#8ae457]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>Save</>
        )}
      </button>
    </form>
  );
};

export default AddItemForm;
