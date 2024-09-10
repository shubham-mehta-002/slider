import { useEffect, useState } from "react";
import data from "../../data.json";
import { Search, Filters, ProductGrid, Pagination } from "../Components";
import { ITEMS_PER_PAGE } from "../constants";

export function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [totalProducts , setTotalProducts] = useState(0)

  useEffect(() => {
    // Filter products based on searchInput,
    let filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchInput.trim().toLowerCase())
    );
    // Filter products based on minPrice and maxPrice
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    setTotalProducts(filteredProducts.length)

    // Filter products based on page
    filteredProducts = filteredProducts.slice(
      (page - 1) * ITEMS_PER_PAGE,
      Math.min(page * ITEMS_PER_PAGE, data.length)
    );

    setProducts(filteredProducts);
  }, [searchInput, minPrice, maxPrice, data, page,setProducts]);

  return (
    <div className="w-[95%] bg-[whitesmoke] m-auto min-h-screen ">
      {/* header */}
      <header className="text-4xl mb-5">
        <span className="text-gray-500">Search Your</span>{" "}
        <span className="font-bold text-green-600">Stubble</span>
      </header>

      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <Filters
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <ProductGrid products={products} />

      <div className="">
        <Pagination
          totalDocs={totalProducts}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
