import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import PageBanner from "../PageBanner/PageBanner";

const MyItem = () => {
  const [data, setData] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  // console.log(user.email);
  useEffect(() => {
    const getUserItems = async () => {
      const url = `https://still-gorge-24214.herokuapp.com/userorder?email=${user.email}`;
      const { data } = await axios.get(url);
      setData(data);
    };
    getUserItems();
  }, [user]);

  // console.log(data);

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you delete this item");

    if (proceed) {
      async function fetchFunction() {
        try {
          const response = await fetch(
            `https://still-gorge-24214.herokuapp.com/userproduct/${id}`,
            {
              method: "DELETE",
            }
          );
          const json = await response.json();
          if (json.deletedCount > 0) {
            const newData = data.filter((item) => item._id !== id);
            setData(newData);
          }
        } catch (err) {
          throw err;
          console.log(err);
        }
      }
      fetchFunction();

      // const url = `https://still-gorge-24214.herokuapp.com/product/${id}`;
      // fetch(url, {
      //   method: "DELETE",
      // })
      //   .then((res) => res.json())
      //   .then((userItem) => {
      //     if (userItem.deletedCount > 0) {
      //       const newData = data.filter((item) => item._id !== id);
      //       setData(newData);
      //     }
      //   });
    }
  };
  return (
    <>
      <PageBanner page="My Items" />
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
                        image
                      </th>
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
                        Email
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
                    {data.map((item) => {
                      return (
                        <tr className="border-b" key={item._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                            <img src={item.img} alt="" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                            {item.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace- border-r">
                            {item.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.quantity}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.price}
                          </td>

                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item._id}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            <button
                              onClick={() => deleteItem(item._id)}
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

export default MyItem;
