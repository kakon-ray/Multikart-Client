import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-500 p-8">
        <div>
          <div className="py-4">
            <p>Full Name</p>
            <p>Kakon Ray</p>
          </div>
          <div className="py-4">
            <p>Email Address</p>
            <p>kakonroy043@gmail.com</p>
          </div>
          <div className="py-4">
            <Link to="/dashboard/updateprofile/id">
              <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="py-4">
            <p>Gender</p>
            <p>Please enter your gender</p>
          </div>
          <div className="py-4">
            <p>Mobile</p>
            <p>+880 *******717</p>
          </div>
        </div>
        <div>
          <div className="py-4">
            <p>Gender</p>
            <p>Please enter your gender</p>
          </div>
          <div className="py-4">
            <p>Address</p>
            <p>Brittikhalbunia, Batiaghata, Khulna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
