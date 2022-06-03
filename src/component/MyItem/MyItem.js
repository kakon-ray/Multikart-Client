import React, { useEffect, useState } from "react";

import PageBanner from "../PageBanner/PageBanner";

import Table from "../Table/Table";

const MyItem = () => {
  return (
    <>
      <div className="dark:bg-black">
        <div className="container mx-auto px-4 md:px-20 py-24">
          <h1 className="text-2xl text-orange-600 font-bold text-center uppercase mb-5">
            My Items
          </h1>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyItem;
