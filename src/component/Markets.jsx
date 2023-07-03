import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import user from "../marketData";
import ContractCard from "./Contract_card";
import BuyerSellerCard from "./BuyerSellerCard";
import Form from "./Form";

const Markets = () => {
  const [userSelected, setUserSelected] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState({
    currency: false,
    pm: false,
    ld: false,
  });

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const filteredData = user.filter((item) => {
      return item?.currency === filters?.currency;
    });
    setFilterData(filteredData);
    setUserSelected([]);
  }, [filters.currency]);

  return (
    <div className="w-full bg-white min-h-[100vh]">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="">
            <span>Market Details</span>
            <span></span>
          </div>
          <button className=" border-[1px] border-sky-500 text-sky-700 px-2 py-[2px] text-[0.8rem] rounded-sm">
            Select Market
          </button>
        </div>
        <div className="flex items-center justify-between py-2 px-3">
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Outlet />
        </div>
        <div className="flex items-center justify-between md:flex-row flex-col">
          <div className="filter_box flex items-center justify-between w-full border-[1px] p-3 md:w-[40%]">
            <div className="filter_items w-20%">
              <p className="text-[0.7rem] opacity-50 font-semibold">Currency</p>
              <select
                name="currency"
                id="currency"
                // value={filters.currency}
                onChange={handleFilterChange}
                className="w-full border-[1px] text-[0.8rem] opacity-70 font-semibold"
              >
                <option selected disabled>
                  {" "}
                  Currency
                </option>
                <option value="INR">INR</option>
                <option value="DOLR">DOLR</option>
              </select>
            </div>
            <div className="filter_items">
              <p className="text-[0.7rem] opacity-50 font-semibold">
                Payment Methods
              </p>
              <select
                name="pm"
                id="pm"
                onChange={handleFilterChange}
                // value={filters.pm}
                className="w-full border-[1px] text-[0.8rem] opacity-70 font-semibold"
              >
                <option selected disabled>
                  {" "}
                  Payment Methods
                </option>

                <option value={30}>30</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="filter_items">
              <p className="text-[0.7rem] opacity-50 font-semibold">
                Lifting Days
              </p>
              <input
                type="text"
                className="w-full border-[1px] text-[0.8rem] opacity-70 font-semibold"
                name="ld"
                // value={filters.ld}
                onChange={handleFilterChange}
                placeholder="Lifting Days"
              />
            </div>
            <div
              className="filter_items text-sky-600 hover:cursor-pointer text-[0.8rem] font-semibold"
              onClick={() => {
                setFilters({
                  currency: false,
                  pm: false,
                  ld: false,
                });
              }}
            >
              Clear All
            </div>
          </div>
          <div className="search__box md:w-[15%] w-full">
            <input
              type="text"
              placeholder="search"
              className="border-[1px] text-[1rem] opacity-90 font-semibold p-2 w-full"
            />
          </div>
        </div>
        <div className="flex items-start justify-between mt-5 md:flex-row flex-col">
          <div className="min-h-[80vh] md:w-[40%] w-full mx-2 border-[1px] border-gray-300 overflow-y-scroll pb-1 mt-20">
            {filterData.length > 0
              ? filterData.map((ele) => (
                  <ContractCard
                    key={ele?.name}
                    data={ele}
                    setuser={setUserSelected}
                  />
                ))
              : user.map((ele) => (
                  <ContractCard
                    key={ele?.name}
                    data={ele}
                    setuser={setUserSelected}
                  />
                ))}
          </div>
          <div className="min-h-[70vh] my-10 md:w-[50%] w-full ">
            <BuyerSellerCard dataData={userSelected} filterValue={filters.ld} />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
