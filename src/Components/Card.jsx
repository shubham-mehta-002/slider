import { CiHeart } from "react-icons/ci";

export function Card({ thumbnail, title, description, price, id,  }) {
  return (
    <div className={`card-wrapper w-full sm:h-80 sm:max-w-80 sm:min-w-19rem md:min-w-80 select-none border-2 flex flex-col rounded-md mx-2 bg-[#afd3aa] shadow-md shadow-slate-300`}>
      <div className="image-container h-[60%]">
        <img src={thumbnail} alt="img" draggable="false" loading="lazy" className="h-full w-full object-fill" />
      </div>

      <div className="flex flex-row h-[10%] w-full justify-between">
        <div className="w-3/4 font-semibold text-sm vsm:sm-base sm:text-xl pl-2">{title}_{id}</div>
        <div className="w-1/4 flex flex-row justify-evenly items-center ">
          <CiHeart className="hover:cursor-pointer sm:text-2xl" />
          <CiHeart className="hover:cursor-pointer sm:text-2xl" />
          <CiHeart className="hover:cursor-pointer sm:text-2xl" />
        </div>
      </div>

      <div className="h-[35%] line-clamp-2 overflow-hidden pl-2 text-xs sm:text-base">
        <p className="leading-1">{description}</p>
      </div>

      <div className="h-[35%] flex flex-row justify-evenly items-center pl-2 py-1 sm:pb-0">
        <button type="button" className="w-[40%] border-[1px] border-green-700 sm:px-10  sm:py-1 vsm:px-8 px-5 vsm:py-[2px] py-[1px] rounded-md text-green-900 font-semibold sm:text-base text-xs  flex items-center justify-center underline">
          ${price}
        </button>

        <button type="button" className="w-[40%] sm:px-10  sm:py-1 vsm:px-8 px-5 vsm:py-[2px] py-[1px] rounded-md border-[1px] border-green-600 bg-green-600 text-white sm:text-base text-xs flex items-center justify-center">
          Add
        </button>
      </div>
    </div>
  );
}
