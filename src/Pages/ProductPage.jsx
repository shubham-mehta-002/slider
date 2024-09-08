import data from "../../data.json";
import { Card } from "../Components/Card";

export function ProductPage() {
    return (
        <div className="w-full">
            {/* header */}
            <header className="text-center py-4">
                Search your <span className="font-bold">Subble</span>
            </header>

            {/* search */}
            <div className="w-full flex items-center justify-center mb-4">
                <input 
                    type="text"
                    className="px-2 py-1 outline-none border-2 border-gray-400 rounded-md w-full max-w-[600px]"
                    placeholder="Search..."            
                />
            </div>

            {/* products list */}
            <div className="w-full px-4  mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
                    {data.map((product) => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
