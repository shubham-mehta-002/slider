import { useState, useEffect } from "react";
import data from "../../data.json";

export function Filters({ minPrice ,setMinPrice,maxPrice,setMaxPrice }) {
    
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



    return (
        <div className="filter-container w-full p-4">
            <div className='filters-wrapper w-fit mx-auto flex flex-col sm:flex-row sm:gap-10'>
                <div className="minPrice-filter w-full sm:w-52 lg:w-60">
                    <label className="block mb-2 text-green-800 text-sm sm:text-base font-semibold">
                        Min Price: ${minPrice}
                    </label>
                    <input
                        type="range"
                        value={minPrice}
                        onChange={minPriceChangeHandler}
                        min={0}
                        max={maxPriceAvailable}
                        className="w-full accent-green-500 hover:cursor-pointer"
                    />
                </div>
                <div className="maxPrice-filter w-full sm:w-52 lg:w-60">
                    <label className="block mb-2 text-green-800 text-sm sm:text-base font-semibold">
                        Max Price: ${maxPrice}
                    </label>
                    <input
                        type="range"
                        value={maxPrice}
                        onChange={maxPriceChangeHandler}
                        min={0}
                        max={maxPriceAvailable}
                        className="w-full accent-green-500 hover:cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}
