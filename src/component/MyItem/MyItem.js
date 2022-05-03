import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import PageBanner from "../PageBanner/PageBanner";
import ManageItems from "../Pages/ManageItems/ManageItems";
import Table from "../Table/Table";
import { toast } from "react-toastify";

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
              // mode: "no-cors",
              method: "DELETE",
            }
          );
          const json = await response.json();
          if (json.deletedCount > 0) {
            const newData = data.filter((item) => item._id !== id);
            setData(newData);
            toast.success("Item Delete Successfully");
          }
        } catch (err) {
          throw err;
          console.log(err);
        }
      }
      fetchFunction();
    }
  };
  return (
    <>
      <PageBanner page="My Items" />
      <div className="container mx-auto px-4 md:px-20 my-30 my-24 min-h-screen">
        <h1 className="text-2xl text-purple-600 font-bold text-center uppercase mb-5">
          My Items
        </h1>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <Table products={data} deleteItem={deleteItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyItem;
