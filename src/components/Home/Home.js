import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ProductCard from "../ProductCard/ProductCard";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const [items, setitems] = useState([]);
  const [isModal, setModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    setModal(true);
    setModalData(false);
    setDeleteData({ text: "Do You want to DELETE this Item?" });

    const newItem = items.filter((item) => item.id != id);
    setitems(newItem);
    console.log("acasc");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedText = e.target.searchField.value;
    console.log(searchedText);

    if (searchedText) {
        const searchedItem = items.filter(item => item.name === searchedText);
        setitems(searchedItem);
    }
  };

  return (
    <section className="flex">
      <Sidebar></Sidebar>
      <div className="p-10">
        <div className="mb-8 flex justify-center">
          <div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="searchField"
                placeholder="Search your items"
                className="input input-bordered input-primary max-w-xs mb-2 text-base"
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-primary text-white mx-3"
              />
            </form>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-12">
            {items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                setModal={setModal}
                setModalData={setModalData}
                setDeleteData={setDeleteData}
                handleDelete={handleDelete}
              ></ProductCard>
            ))}
          </div>
        </div>

        {isModal && (
          <Modal
            modalData={modalData}
            deleteData={deleteData}
            setDeleteConfirm={setDeleteConfirm}
            items={items}
            setitems={setitems}
          ></Modal>
        )}
      </div>
    </section>
  );
};

export default Home;
