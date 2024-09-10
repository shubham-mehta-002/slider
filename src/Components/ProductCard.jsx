import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { HiArrowsRightLeft } from "react-icons/hi2";

export function ProductCard({ thumbnail, title, description, price, id,  }) {
  return (
    // <div className={`card-wrapper min-w-40 max-w-60 h-56 sm:h-[280px] sm:max-w-[280px]  sm:min-w-[280px] select-none flex flex-col rounded-md mx-2 bg-[hsl(110,42%,81%)] shadow-lg shadow-slate-300 mb-5`}>
    <div className={`card-wrapper h-[220px] w-52 sm:h-[270px] sm:w-60 md:h-[320px] md:w-72 select-none flex flex-col rounded-md bg-[hsl(110,42%,81%)] shadow-lg shadow-slate-300 mb-10 mx-auto`}>
     
      <div className="image-container h-[60%]">
        <img src={thumbnail} alt="img" draggable="false" loading="lazy" className="rounded-t-md h-full w-full object-fill" />
      </div>

      <div className="flex flex-row h-[10%] w-full justify-between">
        {/* <div className="w-3/4 font-semibold text-sm vsm:sm-base sm:text-xl pl-2">{title}_{id}</div> */}
        <div className="w-2/3 font-medium text-[15px] sm:text-[19px] pl-2 mt-1 tracking-tight line-clamp-1">{id}</div>
        <div className="w-1/3 flex flex-row justify-evenly items-center ">
          <CiHeart className="hover:cursor-pointer sm:size-[20px]" />
          <HiArrowsRightLeft className="hover:cursor-pointer sm:size-[20px]" />
          <IoEyeOutline className="hover:cursor-pointer sm:size-[20px]" />
        </div>
      </div>

      <div className="h-[35%]  pl-2 text-sm text-[#4c5353] mt-1">
        <p className="leading-1 line-clamp-2 tracking-tight sm:tracking-normal leading-4 text-[12px] sm:text-[14px]">{description}</p>
      </div>

      <div className="h-[35%] flex flex-row justify-evenly items-center pl-2 pb-1 sm:pb-0">
        <button type="button" className=" py-[2px] px-[17px] border-[1px] border-green-700  sm:py-[4px] sm:px-10 rounded-md text-[#00b300] font-semibold text-[8px] sm:text-xs  flex items-center justify-center underline">
          ${price}
        </button>

        <button type="button" className="py-[2px] px-[17px] sm:py-[4px] sm:px-10 rounded-md border-[1px] border-green-600 bg-[#008000] font-medium text-white text-[8px] sm:text-xs flex items-center justify-center">
          Add
        </button>
      </div>
    </div>
  );
}
