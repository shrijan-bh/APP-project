"use client";

// Home.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar";
import { SearchIcon } from "@heroicons/react/solid";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [detailsArray, setDetailsArray] = useState([]);

  const handleProductClick = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getPotatoData = async () => {
    const res = await fetch("http://127.0.0.1:27333/getPotatoValues");
    const data = await res.json();
    return data;
  };

  const filteredItems = detailsArray.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log(filteredItems);
  }, [searchTerm, filteredItems]);

  useEffect(() => {
    if (detailsArray.length === 0) {
      // Only fetch if detailsArray is empty
      getPotatoData().then((data) => {
        setDetailsArray(data); // Set detailsArray to the fetched data
      });
    }
  }, [detailsArray]);
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <div className="flex flex-col items-center ">
          <div className="relative w-full mt-8 sm:max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearchChange}
              className="w-full py-3 pl-10 text-xl transition-all duration-500 ease-in-out bg-white bg-opacity-50 border-2 border-transparent rounded-full focus:outline-none focus:border-green-500 focus:bg-opacity-75"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        {showModal && selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm ">
            <div className="w-3/4 p-5 bg-white bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md lg:w-1/2 dark:bg-slate-800">
              <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  highlights
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.707 7.707a1 1 0 011.414-1.414L10 8.586l.879-.879a1 1 0 111.414 1.414l-.879.879.879.879a1 1 0 01-1.414 1.414L10 11.414l-.879.879a1 1 0 01-1.414-1.414l.879-.879-.879-.879z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="object-cover w-16 h-16 rounded-full"
                      src="/product.jpg"
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                      {selectedItem.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {selectedItem.locality}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col p-5 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1 p-5 bg-red-500 rounded">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Yesterday
                    </h3>
                    <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      Rs. {selectedItem.yesterdayPrice}
                    </p>
                  </div>
                  <div className="flex-1 p-5 bg-yellow-300 rounded">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Today
                    </h3>
                    <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      Rs. {selectedItem.currentPrice}
                    </p>
                  </div>
                  <div className="flex-1 p-5 bg-green-500 rounded">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Tomorrow
                    </h3>
                    <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                      Rs. {selectedItem.tomorrowPrice}
                    </p>
                  </div>
                </div>

                <div className="flex justify-around p-5">
                  <div className="flex-1 mx-2 bg-red-500 rounded">
                    {/* Include graph or value here */}
                  </div>
                  <div className="flex-1 mx-2 bg-yellow-300 rounded">
                    {/* Include graph or value here */}
                  </div>
                  <div className="flex-1 mx-2 bg-green-500 rounded">
                    {/* Include graph or value here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container m-auto">
          <div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center sm:gap-8 lg:gap-10 xl:gap-12">
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div>
                  <ProductCard
                    key={index}
                    name={item.name.toUpperCase()}
                    currentPrice={item.currentPrice}
                    yesterdayPrice={item.yesterdayPrice}
                    tomorrowPrice={item.tomorrowPrice}
                    description={item.description}
                    locality={item.locality}
                    onClick={() => handleProductClick(item)}
                  />
                </div>
              ))
            ) : (
              <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">
                No items found
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
