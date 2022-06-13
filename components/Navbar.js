import React from "react";
import Link from "next/link";
import { BsFillCartCheckFill, BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";

const Navbar = ({
  user,
  cart,
  addtocart,
  removefromcart,
  clearcart,
  logout,
  subTotal,
}) => {
  const ref = useRef();
  const [dropdown, setDropdown] = useState(false);
  const toggleCart = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
    } else if (!ref.current.classList.contains("hidden")) {
      ref.current.classList.add("hidden");
    }
  };
  return (
    <>
      <div className="w-full p-2 inline-block relative text-white font-medium md:font-semibold  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <p className="text-center justify-between text-sm md:text-base">
          This is a dummy project, to contact me:{" "}
          <Link href={"/Contact"}> Click Here</Link>
        </p>
      </div>

      <div className="shadow-md bg-gray-50 flex flex-row">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:items-center">
            <Link href={"/"}>
              <a className="flex md:font-medium text-gray-900 mb-0 align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white p-2 bg-pink-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 sm:text-lg md:text-xl font-semibold">
                  SwagWear
                </span>
              </a>
            </Link>
            <nav className="mr-auto ml-4 py-1 pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center relative text-base justify-center">
              <Link href={"/tshirts"}>
                <a className="mx-5 hover:text-gray-900 md:font-medium hover:border-b-2 hover:border-b-pink-600">
                  TShirts
                </a>
              </Link>
              <Link href={"/shorts"}>
                <a className="mr-5 hover:text-gray-900 md:font-medium hover:border-b-2 hover:border-b-pink-600">
                  Shorts
                </a>
              </Link>
              <Link href={"/hoodies"}>
                <a className="mr-5 hover:text-gray-900 md:font-medium hover:border-b-2 hover:border-b-pink-600">
                  Hoodies
                </a>
              </Link>
              <Link href={"/trousers"}>
                <a className="mr-5 hover:text-gray-900 md:font-medium hover:border-b-2 hover:border-b-pink-600">
                  Trousers
                </a>
              </Link>
            </nav>
          </div>
          <div className="absolute align-center top-9 right-0 flex flex-row">
            <div className="m-auto" onMouseLeave={() => setDropdown(false)}>
              {user.value && (
                <MdAccountCircle
                  onMouseOver={() => setDropdown(true)}
                  className="text-2xl md:text-3xl md:m-5 cursor-pointer"
                />
              )}
              {!user.value && (
                <a>
                  <Link href={"/login"}>
                    <button className="bg-pink-500 text-bold text-center rounded-lg py-1 px-3 text-white text-centre hover:bg-pink-700">
                      Login
                    </button>
                  </Link>
                </a>
              )}
              {dropdown && (
                <div className="absolute z-10 top-12 right-2 p-2 w-full bg-white text-black shadow-lg">
                  <ul className="cursor-pointer p-4">
                    <Link href={"/Contact"}>
                      <a>
                        <li className="hover:text-blue-500 md:font-medium">
                          My Profile
                        </li>
                      </a>
                    </Link>
                    <Link href={"/Contact"}>
                      <a>
                        <li className="hover:text-blue-500 md:font-medium">
                          Orders
                        </li>
                      </a>
                    </Link>
                    <li
                      onClick={logout}
                      className="hover:text-blue-500 md:font-medium"
                    >
                      Log Out
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <BsFillCartCheckFill
              className="text-2xl md:text-3xl m-5 cursor-pointer"
              onClick={toggleCart}
            />
          </div>
          <div
            ref={ref}
            className="absolute z-10 bg-gray-200 text-xl top-0 right-0 hidden rounded-md"
          >
            <div className="sideCart z-200 font-semibold md:font-bold underline flex justify-around text-lg md:text-2xl my-4">
              <span>Items In Your Cart</span>
              <span>
                <AiFillCloseCircle className="absolute" onClick={toggleCart} />
              </span>
            </div>
            {Object.keys(cart).length == 0 && (
              <div className="m-8 text-lg md:text-xl">
                {" "}
                Cart is empty!! <br /> <br /> Add products to checkout.{" "}
              </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <div key={k} className="flex m-8">
                  <span className="w-1/2">{cart[k].name}</span>
                  <span className="w-1/4 flex my-auto">
                    <FaMinusCircle
                      className="m-1 text-pink-500 cursor-pointer"
                      onClick={() => {
                        removefromcart(
                          k,
                          1,
                          "price",
                          "name",
                          "size",
                          "variant"
                        );
                      }}
                    />{" "}
                    {cart[k].qty}{" "}
                    <FaPlusCircle
                      className="m-1 text-pink-500 cursor-pointer"
                      onClick={() => {
                        addtocart(k, 1, "price", "name", "size", "variant");
                      }}
                    />
                  </span>
                  <span className="w-1/4 my-auto">
                    {" "}
                    ${(cart[k].price * cart[k].qty).toFixed(2)}
                  </span>
                </div>
              );
            })}
            <div className="flex justify-end mr-10 mt-6 mb-6 ">
              <span className="border-t-2 border-t-pink-600 font-bold">
                Subtotal: ${subTotal.toFixed(2)}
              </span>
            </div>

            <Link href={"/Contact"}>
              <button className="bg-pink-500 p-2 md:p-3 rounded-3xl m-4 text-white block mx-auto cursor-pointer hover:bg-pink-600 font-medium md:font-semibold mt-8">
                <BsFillBagCheckFill className="inline mb-1 mr-1" />
                Checkout
              </button>
            </Link>
            <p
              className="text-center mt-10 mb-4 cursor-pointer hover:underline"
              onClick={clearcart}
            >
              Clear Cart
            </p>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
