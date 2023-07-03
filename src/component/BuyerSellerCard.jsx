import React from "react";
import { FaStar } from "react-icons/fa";

const BuyerSellerCard = ({ dataData }) => {
  return dataData.length < 1 ? (
    <div className="min-h-[70vh] mt-10 p-3  w-full mb-5 border-[1px] border-gray-300  pb-1 text-center">
      No Data Yet selected
    </div>
  ) : (
    <div className="min-h-[70vh] mt-10 p-3  w-full mb-5 border-[1px] border-gray-300  pb-1">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="text-l">{dataData.name}</div>
          <p className="text-[0.7rem] opacity-50">
            {dataData.country}| {dataData.location}| {dataData.quantity}{" "}
            NAR(Kcal/Kg)
          </p>
        </div>
        <div className="">
          <div className="text-[0.7rem] opacity-50 font-semibold ">
            Last Match
          </div>
          <p className="text-blue-500 font-semibold">
            {dataData.currency} {parseInt(dataData.last_match).toFixed(2)} /MT
          </p>
        </div>
      </div>
      <p className="text-[0.7rem] opacity-50 font-semibold underline py-2 hover: cursor-pointer">
        <span></span> Download Report
      </p>
      <p className="text-[1rem] font-semibold py-2"> All Listings</p>
      <div className="flex items-center justify-between">
        <div className="left w-[50%] px-2 border-r-[1px] border-r-gray-300">
          <p className="flex items-center justify-between text-[0.7rem] opacity-50 font-semibold border-b-gray-400 border-b-[1px]">
            <span>Required Qty</span> <span>Buyers</span>
          </p>
          {dataData?.listing?.buyer_info.map((ele) => (
            <div
              className=" border-b-[1px] border-l-white hover:border-l-blue-500 pl-2 border-gray-300 border-l-4 duration-300 hover:bg-cyan-100 "
              key={ele.views}
            >
              <p>
                <span className="text-[0.7rem] opacity-50">
                  # {ele.views} |
                </span>
                <span className="text-blue-500 text-[0.7rem]"> (views) </span>
              </p>
              <p className="flex items-center justify-between text-[0.7rem]">
                <p>
                  <span className="font-semibold">{ele.requirenment} MT</span>{" "}
                  <span className="opacity-50">|</span>
                </p>
                <p className="text-green-600 font-bold">
                  <span className=" underline mr-2">
                    {dataData.currency} {ele.amount}/MT
                  </span>
                  <span>{`>`}</span>
                </p>
              </p>
              <p className="flex items-center justify-between text-[0.7rem] opacity-50 font-semibold">
                <p>{ele.lifting_days} Lifting Days</p>
                <p>Credit(0 Days)</p>
              </p>
              <p className="text-[0.7rem] opacity-50 font-semibold">
                {dataData.name}
              </p>
              <p className="text-[0.7rem] font-semibold py-2">Buyer Info</p>
              <p className="flex items-center justify-between">
                <p className="flex items-center justify-center text-[0.7rem]">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <FaStar
                      key={i}
                      color={Math.round(ele.rating) ? "yellow" : "gray"}
                    />
                  ))}
                  <span className="text-[0.7rem] opacity-50 font-semibold">
                    {ele.rating}
                  </span>
                </p>
                <p className="text-blue-500 underline text-[0.7rem] ">
                  5+ (Mutual Refrences)
                </p>
              </p>
              <p className="text-[0.7rem] opacity-50 font-semibold">
                {ele.item_purchased}k+ Tons | {ele.deals}+ Deals | {ele.year}+
                Yr
              </p>
            </div>
          ))}
        </div>
        <div className="right w-[50%] px-2">
          <p className="flex items-center justify-between text-[0.7rem] opacity-50 font-semibold border-b-gray-400 border-b-[1px]">
            <span>Sellers</span> <span>Offer Qty</span>
          </p>
          {dataData?.listing?.seller_info.map((ele) => (
            <div
              className=" border-b-[1px] border-l-white hover:border-l-blue-500 pl-2 border-gray-300 border-l-4 duration-300 hover:bg-red-100 "
              key={ele.views}
            >
              <p>
                <span className="text-[0.7rem] opacity-50">
                  # {ele.views} |
                </span>
                <span className="text-blue-500 text-[0.7rem]"> (views) </span>
              </p>
              <p className="flex items-center justify-between text-[0.7rem]">
                <p className="text-red-500 font-bold">
                  <span className=" underline mr-2">
                    {dataData.currency} {ele.amount}/MT
                  </span>
                  <span>{`>`}</span>
                </p>
                <p>
                  <span className="opacity-50">|</span>
                  <span className="font-semibold">{ele.offer_qty} MT</span>
                </p>
              </p>
              <p className="flex items-center justify-between text-[0.7rem] opacity-50 font-semibold">
                <p>{ele.advance} Advance</p>
                <p>{ele.lifting_day} Lifting Days</p>
              </p>
              <p className="text-[0.7rem] opacity-50 font-semibold">
                {dataData.name}
              </p>
              <p className="text-[0.7rem] font-semibold py-2">Seller Info</p>
              <p className="flex items-center justify-between">
                <p className="flex items-center justify-center text-[0.7rem]">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <FaStar
                      key={i}
                      color={Math.round(ele.rating) ? "yellow" : "gray"}
                    />
                  ))}
                  <span className="text-[0.7rem] opacity-50 font-semibold">
                    {ele.rating}
                  </span>
                </p>
                <p className="text-blue-500 underline text-[0.7rem] ">
                  5+ (Mutual Refrences)
                </p>
              </p>
              <p className="text-[0.7rem] opacity-50 font-semibold">
                {ele.item_purchased}k+ Tons | {ele.deals}+ Deals | {ele.year}+
                Yr
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="flex items-center justify-between text-[0.7rem] opacity-50 font-semibold px-2 border-t-[1px] border-b-[2px] border mt-4 border-t-gray-300 border-b-gray-300 py-1 border-white">
        <span>2000</span>
        <span>Total Quantity</span>
        <span>1400</span>
      </p>
    </div>
  );
};

export default BuyerSellerCard;
