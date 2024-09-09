import { useParams } from "react-router-dom";
import data from "../../data.json";
import { useForm } from "react-hook-form";

export function ProductDescription() {
  const { productId } = useParams();
  const product = data.find(
    (productObj) => productObj.id === Number(productId)
  );
  console.log({ product });

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

  function formSubmitHandler(data) {
    console.log({ data });
  }

  return (
    <div className="h-screen w-full bg-[whitesmoke] flex flex-row relative">
      {/* image */}
      <div className="w-[40%] border-2 flex justify-center sticky">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-[250px] w-[400px] mt-10 rounded-md shadow-lg shadow-slate-300 "
        />
      </div>

      <div className="w-[60%]">
        {/* description */}
        <div className="w-[90%] border-2 flex flex-col gap-2 ">
          <div className="title text-5xl font-semibold mt-5 ">
            {product.title}
          </div>
          <div className="description text-[#4c5353] tracking-tight text-xl  mb-5">
            {product.description}
          </div>
        </div>

        {/* price */}
        <div className="price my-3">
            <span className="text-3xl flex mx-auto text-[#00b300]">Price Range : 
                <span className="text-[#00cc00] font-medium">$100-$500</span>
            </span>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(formSubmitHandler)} className="mt-4">
          <div className="details w-full flex flex-row gap-10 ">
            {/* location */}
            <div className="state w-[45%] flex flex-col">
              <label>State :</label>
              <input 
                type="text" 
                {...register("state", validations.state)} 
                className="px-4 py-1 outline-none border-2  rounded-md w-full text-lg"
                />
              {errors.state && <p>{errors.state.message}</p>}
            </div>

            <div className="city w-[45%] flex flex-col">
              <label>City :</label>
              <input type="text" 
              {...register("city", validations.city)} 
              className="px-4 py-1 outline-none border-2  rounded-md w-full text-lg"/>
              {errors.city && <p>{errors.city.message}</p>}
            </div>
          </div>

          {/* land size */}
          <div className="land-size mt-5 ">
            <fieldset>
              <legend className="text-xl">Select Land Size:</legend>
              <div className="w-full flex flex-row flex-wrap gap-5">
              {LAND_SIZES.map(({ label, value }, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={value}
                    {...register("landSize", validations.landSize)}
                  />
                  {label}
                </label>
              ))}
              </div>
              {errors.landSize && <p>{errors.landSize.message}</p>}
            </fieldset>
          </div>

          {/* services */}
          <div className="services">
            <fieldset>
              <legend className="text-xl">Select Service:</legend>
              <div className="w-full flex flex-row flex-wrap gap-5">
              {SERVICES.map(({ label, value }, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={value}
                    {...register("service", validations.service)}
                  />
                  {label}
                </label>
              ))}
              </div>
              {errors.service && <p>{errors.service.message}</p>}
            </fieldset>
          </div>

        {/* another product  */}
        <div>
            <label>
                <input type="checkbox" defaultChecked={false} />
                Have Another type of product ?
            </label>
        </div>


          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
