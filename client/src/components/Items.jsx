import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);
  const getAllItmes = async () => {
    const res = await axios.get(
      "http://localhost:4000/api/v1/inventory/grocery/all",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data.success === true) {
      setItems(res.data.items);
    }
  };
  useEffect(() => {
    getAllItmes();
  }, []);
  return (
    <div className="my-14 mx-48 grid gap-6 md:grid-cols-3">
      {items?.map((item) => (
        <Item
          key={item._id}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          photo={item.photo.secure_url}
        />
      ))}
    </div>
  );
};

export default Items;
