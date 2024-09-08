import { CiHeart } from "react-icons/ci";


export function Card({ thumbnail, title, description, price ,id}) {
  return (
    <div className="card-wrapper select-none h-80  max-w-80 min-w-80 border-2 flex flex-col rounded-md mx-2 bg-[#95d3b0]">
      <div className="image-container h-[60%]">
        <img src={thumbnail} alt="img" draggable="false" className="h-full w-full object-fill" />
      </div>

      <div className="flex flex-row h-[10%] w-full justify-between pl-2">
        <div className="w-3/4 font-semibold text-2xl">{title}</div>
        <div className="w-1/4 flex flex-row justify-between items-center">
          <CiHeart className="size-6" />
          <CiHeart className="size-6" />
          <CiHeart className="size-6" />
        </div>
      </div>

      <div className="h-[35%] line-clamp-2 overflow-hidden pl-2">
        {description}
      </div>

      <div className="h-[35%] flex flex-row justify-evenly items-center pl-2">
        <button type="button" className="border-2 border-slate-400 px-10 py-1 rounded-lg text-green-900 font-semibold">
          ${price}
        </button>

        <button type="button" className="px-10 py-1 rounded-lg bg-green-600 text-white">
          Add
        </button>
      </div>
    </div>
  );
}
