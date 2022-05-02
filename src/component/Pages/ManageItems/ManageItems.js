import React from "react";
import useProducts from "../../../Hook/useProducts";
import Button from "../../Button";
import PageBanner from "../../PageBanner/PageBanner";
import Product from "../../Product/Product";

const ManageItems = () => {
  const [products, setProducts] = useProducts();

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you delete this item");

    if (proceed) {
      const url = `https://still-gorge-24214.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const newData = products.filter((item) => item._id !== id);
            setProducts(newData);
          }
        });
    }
  };

  return (
    <>
      <PageBanner page="Manage Your Inventory"></PageBanner>
      <div className="container mx-auto px-4 md:px-20 my-30 my-24 min-h-screen">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border text-center">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        Supplier
                      </th>
                      <th
                        scope="col"
                        className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-x font-bold text-purple-900 uppercase px-6 py-4"
                      >
                        Manage Item
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => {
                      return (
                        <tr className="border-b" key={item._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                            {item.name}
                          </td>

                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.quantity}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.price}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace- border-r">
                            {item.supplierName}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item._id}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            <button
                              type="submit"
                              className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              Add Item
                            </button>
                            <button
                              type="submit"
                              onClick={() => deleteItem(item._id)}
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
