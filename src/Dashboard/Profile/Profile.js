import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Profile = () => {
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user, loading, currentUserError] = useAuthState(auth);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-500 p-8">
        <div>
          <div className="py-4">
            <p>
              Full Name{" "}
              <Link to="/dashboard/updateprofile/id">
                <span className="text-green-600 underline ml-2">Change</span>
              </Link>
            </p>
            <p>{user.displayName}</p>
          </div>
          <div className="py-4">
            <p>
              Email Address{" "}
              <Link to="/dashboard/updateprofile/id">
                <span className="text-green-600 underline ml-2">Change</span>
              </Link>
            </p>
            <p>{user.email}</p>
          </div>
        </div>
        <div>
          <div className="py-4">
            <p>
              Gender{" "}
              <Link to="/dashboard/updateprofile/id">
                <span className="text-green-600 underline ml-2">Change</span>
              </Link>
            </p>
            <p>Please enter your gender</p>
          </div>
          <div className="py-4">
            <p>
              Mobile{" "}
              <Link to="/dashboard/updateprofile/id">
                <span className="text-green-600 underline ml-2">Change</span>
              </Link>
            </p>
            <p>{user.phoneNumber}</p>
          </div>
        </div>
        <div>
          <div className="py-4">
            <p>Profile Picture</p>
            <div className="flex items-center">
              <img
                src={user.photoURL}
                alt=""
                style={{ width: "50px", height: "50" }}
                className="rounded-full"
              />
              <Link to="/dashboard/updateprofile/id">
                <span className="text-green-600 underline ml-2">Change</span>
              </Link>
            </div>
          </div>
          <div className="py-4">
            <p>
              Address{" "}
              <Link to="/dashboard/updateprofile/id">
                <span className="text-green-600 underline ml-2">Change</span>
              </Link>
            </p>
            <p>Brittikhalbunia, Batiaghata, Khulna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
