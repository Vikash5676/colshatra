import React from "react";

const ContractCard = ({ data, setuser }) => {
  return (
    <div
      className="border-b-[2px]  py-5 border-l-4 border-l-white hover:border-l-sky-700 px-1 duration-200 hover:shadow-md hover:cursor-pointer"
      onClick={() => {
        setuser(data);
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-purple-700 text-[1rem]  font-semibold">
          {data.name}
        </span>
        <span className="flex items-center justify-between px-2 w-[20%]"></span>
      </div>
      <div className="py-1 text-[0.8rem] opacity-60 font-semibold">
        <span className="flag">{data.country}</span>
        <span>| {data.location} | </span>
        5906 NAR(Kcal/Kg)
      </div>
      <div className="py-1 text-[0.9rem] opacity-80 font-semibold">
        {data.name}
      </div>
      <div className="mt-2 flex items-center">
        <div className="filter_items mr-10">
          {data.bid_price < 1 ? (
            <p className="text-[0.7rem] opacity-50 font-semibold">
              Bid Price / MT
            </p>
          ) : (
            <p className="text-[0.7rem] opacity-50 font-semibold">
              Best Buyer / MT
            </p>
          )}
          <p className="text-[0.8rem] opacity-90 font-semibold">
            {data.currency} {parseInt(data.bid_price).toFixed(2)}
          </p>
        </div>
        <div className="filter_items mr-10">
          {data.floor_price < 1 ? (
            <p className="text-[0.7rem] opacity-50 font-semibold">
              Floor Price / MT
            </p>
          ) : (
            <p className="text-[0.7rem] opacity-50 font-semibold">
              Best Buyer / MT
            </p>
          )}
          {data.floor_price < 1 ? (
            <p className="text-[0.8rem] opacity-90 font-semibold">{data.currency} ****</p>
          ) : (
            <p className="text-[0.8rem] opacity-90 font-semibold">
              {data.currency} {data.floor_price}
            </p>
          )}
        </div>
        <div className="filter_items mr-10">
          <p className="text-[0.7rem] opacity-50 font-semibold">Last Match</p>
          <p className="text-[0.8rem] opacity-90 font-semibold">
            {data.currency} {parseInt(data.last_match).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
