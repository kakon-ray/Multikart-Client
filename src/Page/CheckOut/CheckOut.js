import React from "react";

const CheckOut = () => {
  return (
    <section class="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="shadow-md p-6 m-4">
        <h1 className="border-b-2 py-3 mb-6 border-orange-600">
          Billings Information
        </h1>
        <form>
          <div class="mb-4">
            <label>Enter Your Name</label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div class="mb-4">
            <label>Enter Your Email</label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Email Addresse"
            />
          </div>
          <div class="mb-4">
            <label>Enter Country Name</label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Country"
            />
          </div>
          <div class="mb-4">
            <label>Enter State/City</label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="State/City"
            />
          </div>
          <div class="mb-4">
            <label>Enter Full Address</label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Full Address"
            />
          </div>
        </form>
      </div>
      <div>
        <div className="shadow-md p-6 m-4">
          <h1 className="border-b-2 py-3 mb-6 border-orange-600">
            Your Orders
          </h1>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center border">
                    <thead class="border-b">
                      <tr className="bg-orange-600 text-white border-red-200">
                        <th scope="col" class="text-sm font-medium  px-6 py-4">
                          Product
                        </th>
                        <th scope="col" class="text-sm font-medium  px-6 py-4">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b  border-red-200">
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          Blue Dress For Woman X 2
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          $90.00
                        </td>
                      </tr>
                      <tr class="border-b bg-red-100 border-red-200">
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          SubTotal
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          $349.00
                        </td>
                      </tr>
                      <tr class="border-b bg-red-100 border-red-200">
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          Shipping
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Free Shipping
                        </td>
                      </tr>
                      <tr class="border-b bg-orange-500 text-white border-red-200">
                        <td class="text-sm  font-medium px-6 py-4 whitespace-nowrap">
                          Total
                        </td>
                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                          $349.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md p-6 m-4">
          <h1 className="border-b-2 py-3 mb-6 border-orange-600">Payment</h1>
          <div class="flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Mobile Banking
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Paypal
                </label>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              class="inline-block mx-auto px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase  shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
