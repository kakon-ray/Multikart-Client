import React, { useEffect, useState, useRef } from "react";
import PageBanner from "../../PageBanner/PageBanner";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import validator from "validator";
import axios from "axios";
import useToken from "../../../Hook/useToken";
import Swal from "sweetalert2";

const Login = () => {
  const [emailError, setEmailError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetPasError] =
    useSendPasswordResetEmail(auth);

  const [token] = useToken(user);

  // redirect page
  let navigate = useNavigate();
  let location = useLocation();
  const emailRef = useRef("");
  let from = location.state?.from?.pathname || "/";

  const loginAccount = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!validator.isEmail(email)) {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }

    await signInWithEmailAndPassword(email, password);

    // get data jwt web token and save token localstroge
  };

  if (token) {
    Swal.fire({
      icon: "success",
      title: "Login Successed",
      text: "Welcome",
    });
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  }

  const sendPasswordReset = () => {
    const email = emailRef.current.value;
    if (email) {
      toast.success("Send Password Of Your Email");
      sendPasswordResetEmail(email);
    }
  };

  return (
    <div>
      <PageBanner page="Login" />

      <section className="dark:bg-black">
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
              <p className="text-red-600 text-sm">
                {loginSuccess ? " Provide correct email and password" : ""}
              </p>
              <form onSubmit={loginAccount}>
                <div className="mb-6"></div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 border bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Email address"
                    ref={emailRef}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl border font-normal text-gray-700 bg-white bg-clip-padding border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none "
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <p
                    onClick={sendPasswordReset}
                    className="cursor-pointer text-red-600 hover:text-red-800 focus:text-red-600 active:text-red-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-purple-700 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <Link to="/registation">
                  <p className="text-purple-500 text-center pt-4 cursor-pointer">
                    Do not have a account! please register
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

export default Login;
