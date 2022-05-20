import React, { useEffect, useState } from "react";
import PageBanner from "../../PageBanner/PageBanner";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSendEmailVerification,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import validator from "validator";
import axios from "axios";
import useToken from "../../../Hook/useToken";
import Swal from "sweetalert2";

const Registaion = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPsswordError] = useState("");
  const [ceckBox, setCeckBox] = useState();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorupdate] = useUpdateProfile(auth);

  const [token] = useToken(user);
  // redirect page
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const createAccount = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    const isOk = mediumRegex.test(password);

    if (!validator.isEmail(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (password !== confirmPassword) {
      setPsswordError("Two password does not match");
      return;
    } else {
      setPsswordError("");
    }

    if (!isOk) {
      setPsswordError("Password must a-z,0-9 and 6 char longer");
      return;
    } else {
      setPsswordError(false);
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });

    // get data jwt web token and save token localstroge
    const { data } = await axios.post(
      "https://still-gorge-24214.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
  };

  if (token) {
    Swal.fire({
      icon: "success",
      title: "Registation Successed",
      text: "Welcome",
    });
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  }

  return (
    <div>
      <PageBanner page="Registation" />
      <section className=" dark:bg-black">
        <div className="container px-6 container mx-auto px-4 md:px-4 py-24 h-full">
          <div className="flex justify-center sm:flex-col md:flex-row lg:flex-row items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-1/2 lg:w-2/5 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone"
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5 lg:ml-20">
              <form onSubmit={createAccount}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 border bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-2">
                  <label className="text-sm text-red-600 pt-0 mt-0">
                    {emailError ? "Please Enter Valid email" : ""}
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 border bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-2">
                  <label className="text-sm text-red-600 pt-0 mt-0">
                    {passwordError}
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl border font-normal text-gray-700 bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Password"
                  />
                </div>

                <div className="mb-2">
                  <label className="text-sm text-red-600 pt-0 mt-0">
                    {passwordError}
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control block w-full px-4 py-2 text-xl border font-normal text-gray-700 bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="flex justify-between items-center my-4 sm:flex-col lg:flex-row">
                  <div className="form-check mt-2">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onChange={() => setCeckBox(!ceckBox)}
                    />
                    <label
                      className={`form-check-label inline-block`}
                      for="flexCheckDefault"
                      style={!ceckBox ? { color: "red" } : { color: "green" }}
                    >
                      Allow all terms and contition
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 active:text-red-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={!ceckBox}
                  className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <Link to="/login">
                  <p className="text-purple-500 text-center pt-4 cursor-pointer">
                    Already have a account! Please Login
                  </p>
                </Link>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <SocialLogin />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registaion;
