import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useProducts from "../../../Hook/useProducts";
import Button from "../../Button";
import PageBanner from "../../PageBanner/PageBanner";
import Product from "../../Product/Product";
import axios from "axios";

import Table from "../../Table/Table";

const ManageItems = () => {
  const [addValue, setAddValue] = useState({});
  const [loadingData, setLoadingData] = useState(false);
  const [products, setProducts] = useProducts();
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <PageBanner page="Manage Your Inventory"></PageBanner>

      <div className="container mx-auto px-4 md:px-20 py-24 dark:bg-black">
        <h1 className="text-2xl text-purple-600 font-bold text-center uppercase mb-5">
          Manage Inventory
        </h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <Table products={products} addItem="addItem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
