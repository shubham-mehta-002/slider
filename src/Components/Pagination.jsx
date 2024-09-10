import { ITEMS_PER_PAGE } from "../constants";

export function Pagination({
  totalDocs,
  page,
  setPage,
}) {
  const totalPages = Math.ceil(totalDocs / ITEMS_PER_PAGE);

  const pageNumberArray = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumberArray[i] = i + 1;
  }

  return (
    <div className="pagination-container sm:flex-row flex-col-reverse  flex items-center justify-center space-x-2 rounded-md p-2">

      <span className="text-lg text-gray-700">
        Showing{" "}
        {totalDocs === 0
          ? `${(page - 1) * ITEMS_PER_PAGE}`
          : `${(page - 1) * ITEMS_PER_PAGE + 1}`}{" "}
        -{" "}
        {page * ITEMS_PER_PAGE > totalDocs
          ? `${totalDocs}`
          : `${page * ITEMS_PER_PAGE}`}{" "}
        of {totalDocs}
      </span>

        <div className="flex flex-row space-x-2">
      {/* Previous */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        type="button"
        className={`px-3 py-1 text-xl border rounded-md ${
          page > 1
            ? "bg-[#22c55e] text-white  "
            : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
        }`}
      >
        &lt;
      </button>

      {/* Page Number */}
      <ul className="flex items-center space-x-1">
        {pageNumberArray
          .slice(Math.max(0, page - 3), Math.min(page + 2, totalPages))
          .map((pageNumber) => {
            return (
              <li
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`px-3 py-1 text-xl border rounded-md cursor-pointer ${
                  pageNumber === page
                    ? "bg-[#22c55e] text-white "
                    : "bg-white "
                }`}
              >
                {pageNumber}
              </li>
            );
          })}
      </ul>

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        type="button"
        className={`px-3 py-1 text-xl border rounded-md ${
          page !== totalPages
            ? "bg-[#22c55e] text-white  "
            : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
        }`}
      >
        &gt;
      </button>
      </div>
    </div>
  );
}
