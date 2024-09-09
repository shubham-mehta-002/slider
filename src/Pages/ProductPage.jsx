import { useState } from "react";
import data from "../../data.json";
import { Search ,Filters , ProductGrid} from "../Components";


export function ProductPage() {
  const [products, setProducts] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="w-[95%] bg-[whitesmoke] m-auto ">
      {/* header */}
      <header className="text-4xl mb-5">
        <span className="text-gray-500">Search Your</span>{" "}
        <span className="font-bold text-green-600">Stubble</span>
      </header>

      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <Filters
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        products={products}
        setProducts={setProducts}
      />

      <ProductGrid products={products} />
    </div>
  );
}