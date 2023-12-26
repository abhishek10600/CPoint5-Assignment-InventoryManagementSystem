const AddItemForm = () => {
  return (
    <form className="mx-48 my-8">
      <div className="mt-2">
        <h2 className="text-2xl">Name</h2>
        <p className="text-sm text-gray-500">Name of the grocery item.</p>
        <input type="text" placeholder="Example:Apples" />
      </div>
      <div className="mt-2">
        <h2 className="text-2xl">Description</h2>
        <p className="text-sm text-gray-500">
          Description of the grocery item.
        </p>
        <textarea placeholder="Example: Fresh apples from Kolkata..." />
      </div>
      <div className="mt-2">
        <h2 className="text-2xl">Quantity</h2>
        <p className="text-sm text-gray-500">Enter the quantity of the item</p>
        <input type="text" placeholder="Example:12" />
      </div>
      <div className="mt-2">
        <h2 className="text-2xl">Photo</h2>
        <p className="text-sm text-gray-500">Enter one image of the item</p>
        <label className="block mt-2">
          <input
            type="file"
            className="cursor-pointer block w-full text-sm text-gray-500
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-blue-500
      dark:hover:file:bg-blue-400
    "
          />
        </label>
      </div>
      <button className="mt-8 py-6 w-full rounded-2xl bg-[#2f78b496]">
        Save
      </button>
    </form>
  );
};

export default AddItemForm;
