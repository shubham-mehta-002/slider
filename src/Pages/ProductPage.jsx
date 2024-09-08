import { useEffect, useState } from "react";
import data from "../../data.json";
import { Card } from "../Components/Card";
import { CiSearch } from "react-icons/ci";

export function ProductPage() {
  const [products, setProducts] = useState(data);
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [maxPriceAvailable, setMaxPriceAvailable] = useState(0);

  useEffect(() => {
    // Calculate the maximum price available from the data
    const max = data.reduce(
      (acc, curr) => (curr.price > acc ? curr.price : acc),
      0
    );
    setMaxPriceAvailable(max);
    setMaxPrice(max);
  }, [data]);

  useEffect(() => {
    // Filter products based on searchInput, minPrice, and maxPrice
    let filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log({ filteredProducts });

    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    console.log({ filteredProducts });
    setProducts(filteredProducts);
  }, [searchInput, minPrice, maxPrice, data]);

  function searchInputHandler(e) {
    setSearchInput(e.target.value.trim());
  }

  function minPriceChangeHandler(e) {
    setMinPrice(Number(e.target.value));
  }

  function maxPriceChangeHandler(e) {
    setMaxPrice(Number(e.target.value));
  }

  return (
    <div className="w-[95%] bg-[whitesmoke] m-5">
      {/* header */}
      <header className="text-4xl mb-5">
        <span className="text-gray-500">Search Your</span>{" "}
        <span className="font-bold text-green-500">Stubble</span>
      </header>

      {/* search */}
      <div className="flex items-center justify-center mb-4 mx-auto">
        <div className="wrapper min-w-[80vw] sm:min-w-[60vw] max-w-[400px] relative">
          <input
            type="text"
            className="px-4 py-1 outline-none border-2 border-gray-400 rounded-md w-full text-lg"
            placeholder="Search..."
            onChange={searchInputHandler}
            value={searchInput}
          />
          <CiSearch className="absolute right-5 top-[25%] text-gray-500 size-6" />
        </div>
      </div>

      {/* filter */}
      <div className="filter w-full flex flex-row gap-10">
        <div className="w-[40]">
          <label className="block mb-1 text-green-800 font-semibold">Min Price: ${minPrice}</label>
          <input
            type="range"
            value={minPrice}
            onChange={minPriceChangeHandler}
            min={0}
            max={maxPriceAvailable}
            className="w-full hover:cursor-pointer"
          />
        </div>
        <div className="w-[40]">
          <label className="block mb-1">Max Price: ${maxPrice}</label>
          <input
            type="range"
            value={maxPrice}
            onChange={maxPriceChangeHandler}
            min={0}
            max={maxPriceAvailable}
            className="w-full hover:cursor-pointer"
          />
        </div>
      </div>

      {/* products list */}
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full flex justify-center items-center"
            >
              <Card {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
