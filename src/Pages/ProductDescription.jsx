import { useParams } from "react-router-dom";
import data from "../../data.json";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function ProductDescription() {
  const { productId } = useParams();
  const product = data.find(
    (dataObj) => dataObj.id === Number(productId)
  );


  const LAND_SIZES = [
    { label: "2-3 acres land", value: "2-3 acres land" },
    { label: "4-8 acres land", value: "4-8 acres land" },
    { label: "9-15 acres land", value: "9-15 acres land" },
    { label: "51+ acres land", value: "51+ acres land" },
  ];
  const SERVICES = [
    { label: "Cutting Services", value: "cutting-services" },
    { label: "Transportation Services", value: "transportation-services" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      landSize: "2-3 acres land",
      service: "cutting-services",
    },
  });

  const validations = {
    state: {
      required: "State is required",
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: "Invalid format",
      },
      validate: (value) => {
        if (value.trim() === "") {
          return "State is required";
        }
        return true;
      },
    },
    city: {
      required: "City is required",
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: "Invalid format",
      },
      validate: (value) => {
        if (value.trim() === "") {
          return "city is required";
        }
        return true;
      },
    },
    landSize: {
      required: "Please select a land size",
    },
    service: {
      required: "Please select a service",
    },
  };

  const [selectedProduct, setSelectedProduct] = useState('');
  const [otherProductAvailable, setOtherProductAvailable] = useState(false);

  function formSubmitHandler(data) {
    alert("See console for form data")
    console.log({ data });
    console.log({selectedProduct})
  }

  return (
    <div className="min-h-screen w-full bg-[whitesmoke] flex flex-col sm:flex-row relative">
      {/* image */}
      <div className="w-full md:w-[40%] sm:p-2 flex justify-center ">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-[40vh] sm:h-[300px] aspect-square  w-full md:w-[400px] sm:mt-10 xl:w-[85%] sm:rounded-t-md md:rounded-xl md:shadow-lg md:shadow-slate-300 sm:sticky sm:top-10"
        />
      </div>

      <div className="w-full md:w-[60%] p-4 ">
        {/* description */}
        <div className="w-full flex flex-col gap-2   ">
          <div className="title text-3xl sm:text-4xl md:text-5xl font-semibold mt-5">
            {product.title}
          </div>
          <div className="description text-[#4c5353] tracking-tight text-lg md:text-xl mb-5">
            {product.description}
          </div>
        </div>

        {/* price */}
        <div className="price my-3 flex items-center">
          <span className="text-lg md:text-[25px] flex text-[#00cc00]">
            Price Range :
            <span className="text-[#00cc00] font-medium md:text-[25px]">
              $100-$500
            </span>
          </span>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(formSubmitHandler)} className="mt-4">
          <div className="details w-full flex flex-col md:flex-row gap-4 md:gap-10">
            {/* location */}
            <div className="state w-full md:w-[45%] flex flex-col">
              <label>State :</label>
              <input
                type="text"
                {...register("state", validations.state)}
                className="px-4 py-2 outline-none border-2 rounded-md w-full text-md"
              />
              {errors.state && <p className="text-red-500">{errors.state.message}</p>}
            </div>

            <div className="city w-full md:w-[45%] flex flex-col">
              <label>City :</label>
              <input
                type="text"
                {...register("city", validations.city)}
                className="px-4 py-2 outline-none border-2 rounded-md w-full text-md"
              />
              {errors.city && <p className="text-red-500">{errors.city.message}</p>}
            </div>
          </div>

          {/* land size */}
          <div className="land-size mt-5 mb-5">
            <fieldset>
              <legend className="text-[#00cc00] text-xl md:text-2xl font-medium mb-[4px]">
                Select Land Size:
              </legend>
              <div className="w-full flex flex-col md:flex-row flex-wrap gap-5">
                {LAND_SIZES.map(({ label, value }, index) => (
                  <div className="flex gap-1 items-center" key={index}>
                    <input
                      type="radio"
                      value={value}
                      {...register("landSize", validations.landSize)}
                      className="mr-1"
                    />
                    <label>{label}</label>
                  </div>
                ))}
              </div>
              {errors.landSize && <p className="text-red-500">{errors.landSize.message}</p>}
            </fieldset>
          </div>

          {/* services */}
          <div className="services">
            <fieldset className="mb-5">
              <legend className="text-[#00cc00] text-xl md:text-2xl font-medium mb-[4px]">
                Select Service:
              </legend>
              <div className="w-full flex flex-col md:flex-row flex-wrap gap-5">
                {SERVICES.map(({ label, value }, index) => (
                  <div className="flex gap-1 items-center" key={index}>
                    <input
                      type="radio"
                      value={value}
                      {...register("service", validations.service)}
                      className="mr-1"
                    />
                    <label>{label}</label>
                  </div>
                ))}
              </div>
              {errors.service && <p className="text-red-500">{errors.service.message}</p>}
            </fieldset>
          </div>

          {/* another product */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={otherProductAvailable}
              onChange={() => setOtherProductAvailable((prev) => !prev)}
              className="text-xl"
            />
            <label className="font-medium">
              Have Another type of product?
            </label>
          </div>

          {otherProductAvailable && 
            <div className="mt-5">
              <select 
               value={selectedProduct}
               onChange={(e) => setSelectedProduct(e.target.value)}
                className="p-2 w-full md:w-[90%] outline-none hover:cursor-pointer border-2 rounded-md">
                <option value="">Select a product</option>
                <option>Product 1</option>
                <option>Product 2</option>
                <option>Product 3</option>
              </select>
            </div>
          }

          {selectedProduct && 
            <div className="mt-1 px-2 py-1 w-fit rounded-md text-white bg-[#00cc00]">
                <span   
                   onClick={(e) => setSelectedProduct('')}
                    className="mr-2 hover:cursor-pointer text-black font-semibold ">x</span>
                
                <span className="hover:cursor-default">{selectedProduct}</span>
                </div>
          }

          <button type="submit" className="mt-5 px-5 py-2 rounded-lg bg-[#349134] text-[whitesmoke] font-medium border-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
