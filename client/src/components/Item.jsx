const Item = ({ name, description, quantity, photo }) => {
  return (
    <div className="mt-4 flex flex-col card w-[400px] border border-1 shadow-2xl overflow-hidden">
      <img className="object-fill h-[300px] w-[400px]" src={photo} />
      <h2 className="text-2xl font-bold p-2">{name}</h2>
      <p className="text-xl p-2 font-light">{description}</p>
      <span className="p-2 text-xl font-light">Qty: {quantity}pcs</span>
    </div>
  );
};

export default Item;
