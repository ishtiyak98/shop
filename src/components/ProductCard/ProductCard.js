import React from "react";
import Modal from "../Modal/Modal";

const ProductCard = ({ item, setModal, setModalData, setDeleteData, handleDelete}) => {
  
    const handleDetails = () => {
    setModal(true);
    setModalData(item);
    setDeleteData(false);
  };
  
  return (
    <>
      <div className="card lg:w-[350px] lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[100px]" src={item.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold">{item.name}</h2>

          <div className="text-sm ">
            <ul>
              <li>Brand: {item.brand}</li>
              <li>Size: {item.size}</li>
              <li>price: {item.price}</li>
            </ul>
          </div>

          <div className="space-x-2">
            <label
              htmlFor="my-modal-6"
              className="btn modal-button btn-primary text-white"
              onClick={handleDetails}
            >
              Details
            </label>
            <label
              htmlFor="my-modal-6"
              className="btn modal-button btn-error text-white"
              onClick={()=>{handleDelete(item.id)}}
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
