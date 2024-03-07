// ProductCard.js
import React from "react";

function ProductCard({
  name,
  currentPrice,
  yesterdayPrice,
  tomorrowPrice,
  description,
  locality,
  onClick,
}) {
  return (
    <div
      className="mx-auto overflow-hidden duration-300 bg-purple-300 bg-opacity-50 rounded-lg shadow-md cursor-pointer transfor mt-11 dark:bg-slate-800 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <img
        className="object-cover object-center w-full h-40"
        src="/product.jpg"
        alt="Product"
      />

      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          {name}
        </h2>
        <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Rs. {currentPrice}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
