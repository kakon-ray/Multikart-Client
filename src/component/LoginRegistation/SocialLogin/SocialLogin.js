import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../Hook/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);

  const signinGoogle = () => {
    signInWithGoogle();
  };

  // redirect page
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (token) {
    toast.success("Login Successed");
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  }
  useEffect(() => {
    if (error) {
      toast.error("Login Faild");
    }
  }, [error]);

  return (
    <div>
      <p
        onClick={signinGoogle}
        className="px-7 py-3 text-white font-medium rounded-full text-sm leading-snug uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: "#4285f4" }}
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <ion-icon name="logo-google"></ion-icon>
        <span className="ml-3"> Continue with Google</span>
      </p>
    </div>
  );
};

export default SocialLogin;
