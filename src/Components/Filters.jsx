import {useState , useEffect} from "react"
import data from "../../data.json"

export function Filters({ searchInput, products, setProducts, setSearchInput }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [maxPriceAvailable, setMaxPriceAvailable] = useState(0);
    function minPriceChangeHandler(e) {
      setMinPrice(Number(e.target.value));
    }
  
    function maxPriceChangeHandler(e) {
      setMaxPrice(Number(e.target.value));
    }
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
        product.title.toLowerCase().includes(searchInput.trim().toLowerCase())
      );
      console.log({ filteredProducts });
  
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      console.log({ filteredProducts });
      setProducts(filteredProducts);
    }, [searchInput, minPrice, maxPrice, data]);
  
    return (
      <div className="filter w-full flex flex-row gap-10">
        <div className="w-[40]">
          <label className="block mb-1 text-green-800 font-semibold">
            Min Price: ${minPrice}
          </label>
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
    );
  }
  