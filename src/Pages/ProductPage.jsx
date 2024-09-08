import data from "../../data.json";
import { Card } from "../Components/Card";
import { CiSearch } from "react-icons/ci";

export function ProductPage() {
  return (
    <div className="w-[95%] bg-[whitesmoke] m-5">
      {/* header */}
      <header className=" text-4xl mb-5">
        <span className="text-gray-500">Search Your</span> <span className="font-bold text-green-500">Stubble</span>
      </header>

      {/* search */}
      <div className="flex items-center justify-center mb-4 mx-auto ">
        <div className="wrapper min-w-[80vw] sm:min-w-[60vw] max-w-[400px] relative ">
        <input
          type="text"
          className="px-4 py-1 outline-none border-2 border-gray-400 rounded-md w-full text-lg"
          placeholder="Search..."
          
        />
        <CiSearch className="absolute right-5 top-[25%] text-gray-500 size-6" />

        </div>

      </div>

      {/* products list */}
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
          {data.map((product) => (
            <div key={product.id} className="w-full flex justify-center items-center">
              <Card
                {...product}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
