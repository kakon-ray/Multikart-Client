import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomeLink/CustomeLink";
import CustomLinkMobile from "../CustomeLink/CustomeLinkMobile";
import userPhoto from "../../assets/img/user.png";
import { toast } from "react-toastify";
import logo from "../../assets/img/logo.png";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";
import { CompareListContext } from "../../Context/CompareListContext";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  let [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartItem, setCart] = useContext(CartContext);
  const [wishItem, setWishList] = useContext(WishListContext);
  const [compareList, setCompareList] = useContext(CompareListContext);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Shop", link: "/shop" },
  ];

  const logOut = () => {
    toast.success("Logout Successfully");
    signOut(auth);

    // localStorage.removeItem("accessToken");
  };

  return (
    <nav
      className="
      sticky top-0
      z-40
      dark:bg-black
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-3 
        lg:py-0
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-md
        navbar navbar-expand-lg navbar-light
        "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="
                navbar-toggler
                text-gray-500
                border-0
                hover:shadow-none hover:no-underline
                my-4
                bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
              "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <a
            className="
                  flex
                  items-center
                  text-gray-900
                  hover:text-gray-900
                  focus:text-gray-900
                  mt-2
                  lg:mt-0
                  mr-1
                "
            href="#"
          >
            <img
              src={logo}
              style={{ height: "25px" }}
              alt=""
              loading="lazy"
              className="my-2 py-1 lg:py-0"
            />
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex flex-col pl-0 lg:pl-8 list-style-none mr-auto">
            {Links.map((link) => (
              <li
                key={link.name}
                style={{ padding: "22px 0" }}
                className="hidden lg:block"
              >
                <CustomLink
                  to={link.link}
                  className="text-gray-500 hover:text-bg-orange-600 duration-500 font-bold"
                >
                  {link.name}
                </CustomLink>
              </li>
            ))}

            {Links.map((link) => (
              <li key={link.name} className="lg:hidden py-3">
                <CustomLinkMobile
                  to={link.link}
                  className="text-gray-500 hover:text-bg-orange-600 duration-500 font-bold"
                >
                  {link.name}
                </CustomLinkMobile>
              </li>
            ))}
          </ul>

          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="flex items-center relative gap-2">
          <div className="mr-5 flex items-center relative gap-2">
            {/* <!-- Icon --> */}

            <span
              onClick={() => navigate("/dashboard/cartlist")}
              className="
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      mr-4
                      dropdown-toggle
                      hidden-arrow
                      flex items-center
                    "
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CartIcon />
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-3 ml-3 py-0 px-1.5">
                {cartItem?.length}
              </span>
            </span>

            <span
              onClick={() => navigate("/dashboard/wishlist")}
              className="
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      mr-4
                      dropdown-toggle
                      hidden-arrow
                      flex items-center
                    "
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ion-icon
                name="heart-outline"
                style={{ fontSize: "22px" }}
              ></ion-icon>
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-3 ml-3 py-0 px-1.5">
                {wishItem?.length}
              </span>
            </span>

            <a
              onClick={() => navigate("/dashboard/comparelist")}
              className="
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      mr-2
                      dropdown-toggle
                      hidden-arrow
                      flex items-center
                    "
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faCodeCompare} className="text-lg " />
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-3 ml-3 py-0 px-1.5">
                {compareList?.length}
              </span>
            </a>
          </div>

          <div className="dropdown relative">
            <p className="dropdown-toggle flex items-center hidden-arrow">
              {user && (
                <div class="dropdown relative">
                  <a
                    class="dropdown-toggle flex items-center hidden-arrow"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={user?.photoURL ? user?.photoURL : userPhoto}
                      className="rounded-full"
                      style={{ height: "25px", width: "25px" }}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="
                    dropdown-menu
                   dropdown-container
                  "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link to="dashboard">
                      <li>
                        <a className="nav-link" href="#">
                          Profile
                        </a>
                      </li>
                    </Link>

                    <li>
                      <a
                        className="
                      nav-link
                      "
                        href="#"
                      >
                        Add Review
                      </a>
                    </li>
                    <li onClick={() => signOut(auth)}>
                      <a className="nav-link" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </p>
            <ul
              className="
                    dropdown-menu
                    min-w-max
                    absolute
                  
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                    left-auto
                    right-0
                  "
              aria-labelledby="dropdownMenuButton2"
            >
              <li onClick={logOut}>
                <a
                  className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                  href="#"
                >
                  Log Out
                </a>
              </li>
              <li>
                <a
                  className="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div
            className="flex items-center ml-2 cursor-pointer lg:hidden"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            name="reorder-four-outline"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="ml-2 text-lg text-orange-600"
            />
          </div>
        </div>

        {/* <!-- Right elements --> */}
      </div>
    </nav>
  );
};

export default Navbar;
