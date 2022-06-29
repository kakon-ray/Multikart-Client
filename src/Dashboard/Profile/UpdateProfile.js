import { async } from "@firebase/util";
import React from "react";
import { useRef } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user, loading, currentUserError] = useAuthState(auth);

  const usename = useRef();
  const useemail = useRef();
  const usegender = useRef();
  const usemobile = useRef();
  const useaddress = useRef();

  const handleSubmit = async () => {
    const nameResult = usename.current?.value;
    const emailResult = useemail.current?.value;
    const genderResult = usegender.current?.value;
    const mobileResult = usemobile.current?.value;
    const addressResult = useaddress.current?.value;

    await updateProfile({
      displayName: nameResult,
      email: emailResult,
      gender: genderResult,
      phoneNumber: mobileResult,
      address: addressResult,
    });

    console.log(user);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 text-gray-500 p-8">
        <div>
          <div className="py-4">
            <p>Change Name </p>
            <input
              type="text"
              name="name"
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder={user?.displayName}
              ref={usename}
              required
            />
          </div>
          <div className="py-4">
            <p>Change Email </p>
            <input
              type="text"
              name="name"
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder={user?.email}
              ref={useemail}
              required
            />
          </div>
        </div>
        <div>
          <div className="py-4">
            <p>Gender</p>
            <select
              ref={usegender}
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-600 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              aria-label="Default select example"
            >
              <option selected>Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="py-4">
            <p>Change Mobile </p>
            <input
              type="phone"
              name="phone"
              ref={usemobile}
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder={user?.phoneNumber}
              required
            />
          </div>
        </div>
        <div>
          <div>
            <p>Image</p>
            <div className="mb-4 flex">
              <img
                src={user?.photoURL}
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
            <p>Address </p>
            <input
              type="text"
              name="name"
              ref={useaddress}
              className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border focus:outline-0  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
              id="exampleFormControlInput2"
              placeholder="Brittikhalbunia, Batiaghata, Khulna"
            />
          </div>
        </div>
        <div>
          <button
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
