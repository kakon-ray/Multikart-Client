import React from "react";
import useProducts from "../../../Hook/useProducts";
import Button from "../../Button";
import PageBanner from "../../PageBanner/PageBanner";
import Product from "../../Product/Product";

const ManageItems = () => {
  const [products, setProducts] = useProducts();

  return (
    <>
      <PageBanner page="Manage Your Inventory"></PageBanner>
      <div className="container mx-auto px-4 md:px-20 my-30 my-24">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        class="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        class="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Supplier
                      </th>
                      <th
                        scope="col"
                        class="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        class="text-x font-bold text-purple-900 uppercase px-6 py-4"
                      >
                        Manage Item
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => {
                      return (
                        <tr class="border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                            {item.name}
                          </td>

                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.quantity}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.price}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace- border-r">
                            {item.supplierName}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item._id}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            <button
                              type="submit"
                              className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              Add Item
                            </button>
                            <button
                              type="submit"
                              className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              Delete Item
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
