import { CiSearch } from "react-icons/ci";

export function Search({ searchInput, setSearchInput }) {
  function searchInputHandler(e) {
    setSearchInput(e.target.value);
  }
  return (
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
  );
}
