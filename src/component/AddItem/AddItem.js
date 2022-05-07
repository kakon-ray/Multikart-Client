import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import PageBanner from "../PageBanner/PageBanner";

const AddItem = () => {
  const [user, loading, error] = useAuthState(auth);

  const addItem = (e) => {
    e.preventDefault();
    const email = user.email;
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const supplierName = e.target.supplier.value;
    const img = e.target.img.value;

    const addItemValue = {
      email,
      name,
      quantity,
      price,
      supplierName,
      img,
    };

    async function fetchFunction() {
      try {
        const response = await fetch(
          `https://still-gorge-24214.herokuapp.com/userproduct`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addItemValue),
          }
        );

        toast.success("Item Add Successfully");
      } catch (err) {
        throw err;
        console.log(err);
      }
    }

    fetchFunction();

    e.target.reset();
  };
  return (
    <div>
      <PageBanner page="Add Products"></PageBanner>
      <section className="h-full gradient-form bg-gray-200 dark:bg-black">
        <div className="container mx-auto px-4 md:px-20 py-24 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0 dark:bg-black">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center"></div>
                      <form onSubmit={addItem}>
                        <p className="my-4 sm:pt-4 dark:text-slate-200">
                          Please Add Inventory
                        </p>

                        <div className="mb-4">
                          <input
                            type="text"
                            name="name"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="quantity"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            placeholder="Quantity"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="price"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput4"
                            placeholder="Price"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="supplier"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput5"
                            placeholder="Supplier Name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="img"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput6"
                            placeholder="Image Link"
                            required
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, purple, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Add Product
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Hello this is a warehouse consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
