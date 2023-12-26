import { Link } from "react-router-dom";
import AddItemForm from "./AddItemForm";

const Features = ({ action }) => {
  const activeLinkClass = (type) => {
    let classes = "flex gap-1 items-center text-xl py-2 px-4 rounded-full";
    if (type === action) {
      classes = classes + " bg-[#2f78b496]";
    } else {
      classes = classes + " bg-gray-200";
    }
    return classes;
  };
  return (
    <div>
      <nav className="mt-8 flex gap-4 justify-center">
        <Link to="/" className={activeLinkClass("allitems")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          Items
        </Link>
        <Link to="/additems" className={activeLinkClass("additems")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Add Items
        </Link>
      </nav>
      {action === "allitems" && <div className="">All items here</div>}
      {action === "additems" && (
        <>
          <AddItemForm />
        </>
      )}
    </div>
  );
};

export default Features;
