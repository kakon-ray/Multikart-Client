import React from "react";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 text-gray-500 p-8">
        <div>
          <div className="py-4">
            <p>
              Change Name{" "}
              <span className="text-green-600 underline ml-2">Change</span>
            </p>
            <input
              type="text"
              name="name"
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder="Kakon Ray"
              required
            />
          </div>
          <div className="py-4">
            <p>
              Change Email{" "}
              <span className="text-green-600 underline ml-2">Change</span>
            </p>
            <input
              type="text"
              name="name"
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder="kakonrot043@gmail.com"
              required
            />
          </div>
        </div>
        <div>
          <div className="py-4">
            <p>
              Gender
              <span className="text-green-600 underline ml-2">Change</span>
            </p>
            <select
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-600 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              aria-label="Default select example"
            >
              <option selected>Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="py-4">
            <p>
              Change Mobile{" "}
              <span className="text-green-600 underline ml-2">Change</span>
            </p>
            <input
              type="text"
              name="name"
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder="01707500512"
              required
            />
          </div>
        </div>
        <div>
          <div>
            <p>
              Image
              <span className="text-green-600 underline ml-2">Change</span>
            </p>
            <div className="mb-4 flex">
              <img
                src="https://i.ibb.co/VpppGtD/124489889-369962447570149-4781988956737706303-n-1.jpg"
                alt=""
                style={{ width: "50px", height: "50" }}
                className="rounded-full"
              />
              <input
                type="file"
                name="file"
                className="my-auto"
                id="exampleFormControlInput2"
                placeholder="Brittikhalbunia, Batiaghata, Khulna"
              />
            </div>
          </div>
          <div className="py-4">
            <p>
              Address{" "}
              <span className="text-green-600 underline ml-2">Change</span>
            </p>
            <input
              type="text"
              name="name"
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder="Brittikhalbunia, Batiaghata, Khulna"
            />
          </div>
        </div>
        <div>
          <Link to="/dashboard/updateupdateprofile/id">
            <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
              Save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
