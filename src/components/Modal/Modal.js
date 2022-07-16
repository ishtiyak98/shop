import React from "react";

const Modal = ({ modalData, deleteData, setDeleteConfirm, items, setItems }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {modalData && (
            <div>
              <img src={modalData.image} className="w-[200px]" alt="" />
              <h2 className="text-xl font-bold my-2">
                Product Name: {modalData.name}
              </h2>
              <h4>Brand: {modalData.brand}</h4>
              <h4>Size: {modalData.size}</h4>
              <h4>Price: {modalData.price}</h4>
              <h4>Year: {modalData.year}</h4>
            </div>
          )}

          {deleteData && <h2>{deleteData.text}</h2>}
          <div className="modal-action">
            {modalData && (
              <label htmlFor="my-modal-6" className="btn">
                OK
              </label>
            )}
            {deleteData && (
              <>
                <label htmlFor="my-modal-6" className="btn">
                  Cancel
                </label>
                <label htmlFor="my-modal-6" className="btn btn-error" onClick={setDeleteConfirm(true)}>
                  Delete
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
