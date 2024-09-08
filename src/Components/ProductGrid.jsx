import { ProductCard } from "../Components/ProductCard";
export function ProductGrid({ products }) {
  console.log({products})
    return (
      <div className="w-[100%] sm:w-[95%] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2 gay-y-4 sm:gap-x-4 sm:gap-y-0">
          {products.length>0 ? products.map((product) => (
            <div
              key={product.id}
              className="w-full flex justify-center items-center"
            >
              <ProductCard {...product} />
            </div>
          ))
          :
          <div className="mt-5 text-2xl sm:text-4xl w-[90vw] text-center flex items-center justify-center">No Product Found</div>
        }
        </div>
      </div>
    );
  }