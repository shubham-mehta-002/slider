import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { HiArrowsRightLeft } from "react-icons/hi2";

export function SliderCard({ thumbnail, title, description, price, id,  }) {
  return (
    <div className={`card-wrapper min-w-[200px] max-w-[200px]  sm:h-80 max-h-76 sm:max-w-[290px] sm:min-w-[290px] select-none flex flex-col rounded-md mx-2 bg-[hsl(110,42%,81%)] shadow-lg shadow-slate-300 mb-10`}>
      <div className="image-container h-[60%]">
        <img src={thumbnail} alt="img" draggable="false" loading="lazy" className="rounded-t-md h-full w-full object-fill" /> 
      </div>

      <div className="flex flex-row h-[10%] w-full justify-between">
        {/* <div className="w-3/4 font-semibold text-sm vsm:sm-base sm:text-xl pl-2">{title}_{id}</div> */}
        <div className="w-2/3 font-medium text-[15px] sm:text-[19px] pl-2 mt-1 tracking-tight">{id}</div>
        <div className="w-1/3 flex flex-row justify-evenly items-center ">
          <CiHeart className="hover:cursor-pointer sm:size-[20px]" />
          <HiArrowsRightLeft className="hover:cursor-pointer sm:size-[20px]" />
          <IoEyeOutline className="hover:cursor-pointer sm:size-[20px]" />
        </div>
      </div>

      <div className="h-[35%]  pl-2 text-sm text-[#4c5353] mt-1">
        <p className="leading-1 line-clamp-2 tracking-tight sm:tracking-normal leading-4 text-[12px] sm:text-[15px]">{description}</p>
      </div>

      <div className="h-[35%] flex flex-row justify-evenly items-center pl-2 py-1 sm:pb-0">
        <button type="button" className=" border-[1px] border-green-700  py-1 px-5 sm:py-[5px] sm:px-10 rounded-md text-[#00b300] font-semibold text-[10px] sm:text-xs  flex items-center justify-center underline">
          ${price}
        </button>

        <button type="button" className="py-1 px-5 sm:py-[5px] sm:px-10 rounded-md border-[1px] border-green-600 bg-[#008000] font-medium text-white text-xs flex items-center justify-center">
          Add
        </button>
      </div>
    </div>
  );
}


// import { CiHeart } from "react-icons/ci";

// export function Card({ thumbnail, title, description, price, id,  }) {
//   return (
//     <div className={`card-wrapper w-full sm:h-84 sm:max-w-19rem sm:min-w-19rem md:min-w-80 select-none flex flex-col rounded-md mx-2 bg-[#bdddb7] shadow-lg shadow-slate-300`}>
//       <div className="image-container h-[60%]">
//         <img src={thumbnail} alt="img" draggable="false" loading="lazy" className="rounded-t-md h-full w-full object-fill" />
//       </div>

//       <div className="flex flex-row h-[10%] w-full justify-between">
//         {/* <div className="w-3/4 font-semibold text-sm vsm:sm-base sm:text-xl pl-2">{title}_{id}</div> */}
//         <div className="w-3/4 font-semibold text-[20px] pl-2">{title}_{id}</div>
//         <div className="w-1/4 flex flex-row justify-evenly items-center ">
//           <CiHeart className="hover:cursor-pointer sm:text-2xl" />
//           <CiHeart className="hover:cursor-pointer sm:text-2xl" />
//           <CiHeart className="hover:cursor-pointer sm:text-2xl" />
//         </div>
//       </div>

//       <div className="h-[35%] line-clamp-2 overflow-hidden pl-2 text-xs sm:text-base">
//         <p className="leading-1">{description}</p>
//       </div>

//       <div className="h-[35%] flex flex-row justify-evenly items-center pl-2 py-1 sm:pb-0">
//         <button type="button" className="w-[40%] border-[1px] border-green-700 sm:px-10  sm:py-1 vsm:px-8 px-5 vsm:py-[2px] py-[1px] rounded-md text-green-900 font-semibold sm:text-base text-xs  flex items-center justify-center underline">
//           ${price}
//         </button>

//         <button type="button" className="w-[40%] sm:px-10  sm:py-1 vsm:px-8 px-5 vsm:py-[2px] py-[1px] rounded-md border-[1px] border-green-600 bg-green-600 text-white sm:text-base text-xs flex items-center justify-center">
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }
