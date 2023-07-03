import React from "react";

const Form = () => {
  return (
    <div className="w-full py-2 px-3 border-[2px] min-h-[50vh]">
      <div className="flex items-center w-full border-b-[1px]">
        <span className="py-2 px-3 hover:text-blue-500 border-b-[2px] border-b-white hover:border-b-blue-500">
          Buy
        </span>
        <span className="py-2 px-3 hover:text-blue-500 border-b-[2px] border-b-white hover:border-b-blue-500">
          Sell
        </span>
      </div>
      <form action="">
        <div className="flex items-center justify-between">
          <div className="w-[40%]">
            <p className="text-[1rem] opacity-50 py-1">
              Vessel(s)<sup className="text-red-500">*</sup>{" "}
            </p>
            <select
              name="vessel"
              id="vessel"
              className="w-full h-8 border-[1px] rounded-sm"
              required
            >
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="w-[20%]">
            <p className="text-[1rem] opacity-50 py-1">
              Quantity<sup className="text-red-500 ">*</sup>{" "}
            </p>
            <input
              type="text"
              required
              className="w-full h-8 border-[1px] rounded-sm"
            />
          </div>
          <div className="w-[25%]">
            <p className="text-[1rem] opacity-50 py-1">
              Offer Price...<sup className="text-red-500">*</sup>{" "}
            </p>
            <input type="text" required className="w-full h-8 border-[1px]" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="w-[30%]">
            <p className="text-[1rem] opacity-50 py-1">
              Payments Terms<sup className="text-red-500">*</sup>{" "}
            </p>
            <select
              name="payterm"
              id="payterm"
              className="w-full h-8 border-[1px] rounded-sm"
              required
            >
              <option value="">Cash&Carry</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="w-[30%]">
            <p className="text-[1rem] opacity-50 py-1">
              Advance<sup className="text-red-500 ">*</sup>{" "}
            </p>
            <input
              type="text"
              required
              className="w-full h-8 border-[1px] rounded-sm"
            />
          </div>
          <div className="w-[30%]">
            <p className="text-[1rem] opacity-50 py-1">
              Balance<sup className="text-red-500">*</sup>{" "}
            </p>
            <input type="text" required className="w-full h-8 border-[1px]" />
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="w-[30%]">
            <p className="text-[1rem] opacity-50 py-1">
              No. of Payment Days<sup className="text-red-500">*</sup>{" "}
            </p>
            <select
              name="payterm"
              id="payterm"
              className="w-full h-8 border-[1px] rounded-sm"
              required
            >
              <option value="">15</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="w-[30%]">
            <p className="text-[1rem] opacity-50 py-1">
              Lifting Days<sup className="text-red-500 ">*</sup>{" "}
            </p>
            <input
              type="text"
              required
              className="w-full h-8 border-[1px] rounded-sm"
            />
          </div>
          <div className="w-[30%]">
            <p className="text-[1rem] opacity-50 py-1">
              Expiry<sup className="text-red-500">*</sup>{" "}
            </p>
            <input type="text" required className="w-full h-8 border-[1px]" />
          </div>
        </div>
        <div className="w-[60%] py-2">
          <p className="text-[1rem] opacity-50 py-1">Address</p>
          <input type="text" className="w-full h-8 border-[1px] rounded-sm" />
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="text-[1rem] opacity-50 py-1 w-[50%]">
            <p>Make Your Listing Hot?</p>
            <input type="checkbox" name="" id="" required />
            <span className="ml-3">Hot</span>
          </div>
          <div className="text-[1rem] opacity-50 py-1 w-[50%]">
            <p>
              Post Your Listing On?<sup className="text-red-500">*</sup>
            </p>
            <input type="checkbox" name="" id="" checked disabled />
            <span className="mx-3">Coalshatra</span>
            <input type="checkbox" name="" id="" required />
            <span className="ml-3">Brand Store</span>
          </div>
        </div>
        <div className="py-4 text-blue-500">
          <span className="font-bold text-[1.2rem]">+</span>{" "}
          <span className="text-[0.8rem]">Add Special Comments</span>
        </div>
        <button
          type="submit"
          className="mt-4 py-1 px-3 bg-blue-700 text-white rounded-[4px] hover:cursor-pointer hover:shadow-lg hover:bg-blue-500"
        >
          Submit Your Product
        </button>
      </form>
    </div>
  );
};

export default Form;
