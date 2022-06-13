import { useRouter } from "next/router";
import Image from "next/image"
import mongoose from "mongoose";
import Product from "../../models/Product";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Post = ({ addtocart, buyNow, product, variants }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [color, setcolor] = useState(product.color);
  const [size, setsize] = useState(product.size);

  const refreshVariants = (newsize, newcolor) => {
    let url = ` ${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize]["slug"]}`;
    window.location = url;
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <a className="md:w-1/2 md: border-r-black border-2-black mx-auto"> <Image
              alt="ecommerce"
              className="m-auto object-center rounded p-4"
              src={`${product.img}`}
            /></a>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.title}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.category}
              </h1>

              <p className="leading-relaxed">
                {product.desc + ` Update description in DB`}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes("black") &&
                    Object.keys(variants["black"]).includes(size) && (
                      <button
                        className={`border-2 bg-black rounded-full w-6 h-6 focus:outline-none ${
                          color === "black" ? "border-black" : "border-gray-300"
                        }`}
                        onClick={() => {
                          refreshVariants(size, `black`);
                        }}
                      ></button>
                    )}
                  {Object.keys(variants).includes("blue") &&
                    Object.keys(variants["blue"]).includes(size) && (
                      <button
                        className={`border-2 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none ${
                          color === "blue" ? "border-black" : "border-gray-300"
                        }`}
                        onClick={() => {
                          refreshVariants(size, `blue`);
                        }}
                      ></button>
                    )}
                  {Object.keys(variants).includes("brown") &&
                    Object.keys(variants["brown"]).includes(size) && (
                      <button
                        className={`border-2 ml-1 bg-red-800 rounded-full w-6 h-6 focus:outline-none ${
                          color === "brown" ? "border-black" : "border-gray-300"
                        }`}
                        onClick={() => {
                          refreshVariants(size, `brown`);
                        }}
                      ></button>
                    )}
                  {Object.keys(variants).includes("yellow") &&
                    Object.keys(variants["yellow"]).includes(size) && (
                      <button
                        className={`border-2 ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none ${
                          color === "yellow"
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        onClick={() => {
                          refreshVariants(size, `yellow`);
                        }}
                      ></button>
                    )}
                  {Object.keys(variants).includes("orange") &&
                    Object.keys(variants["orange"]).includes(size) && (
                      <button
                        className={`border-2 ml-1 bg-orange-300 rounded-full w-6 h-6 focus:outline-none ${
                          color === "orange"
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        onClick={() => {
                          refreshVariants(size, `orange`);
                        }}
                      ></button>
                    )}
                  {Object.keys(variants).includes("grey") &&
                    Object.keys(variants["grey"]).includes(size) && (
                      <button
                        className={`border-2 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "grey" ? "border-black" : "border-gray-300"
                        }`}
                        onClick={() => {
                          refreshVariants(size, `grey`);
                        }}
                      ></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariants(e.target.value, color);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      <option
                        disabled={!Object.keys(variants[color]).includes("S")}
                        value={"S"}
                        className={`{ ${
                          !Object.keys(variants[color]).includes("S") &&
                          "bg-gray-300"
                        }`}
                      >
                        {" "}
                        S{" "}
                      </option>
                      <option
                        value={"M"}
                        disabled={!Object.keys(variants[color]).includes("M")}
                        className={`${
                          !Object.keys(variants[color]).includes("M") &&
                          "bg-gray-300"
                        } `}
                      >
                        M
                      </option>
                      <option
                        value={"L"}
                        disabled={!Object.keys(variants[color]).includes("L")}
                        className={`${
                          !Object.keys(variants[color]).includes("L") &&
                          "bg-gray-300"
                        }`}
                      >
                        L
                      </option>
                      <option
                        value={"XL"}
                        disabled={!Object.keys(variants[color]).includes("XL")}
                        className={`${
                          !Object.keys(variants[color]).includes("XL") &&
                          "bg-gray-300"
                        }`}
                      >
                        XL
                      </option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
                </span>
                <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => {
                    addtocart(
                      slug,
                      1,
                      `${product.price}`,
                      `${product.title} ${product.category} (${product.size}, ${product.color})`,
                      `${product.size}`,
                      `${product.color}`
                    );
                    toast.success("Item added to Cart", {
                      position: "bottom-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }}
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => {
                    buyNow(
                      slug,
                      1,
                      product.price,
                      `${product.title} ${product.category} (${product.size}, ${product.color})`,
                      product.size,
                      product.variant
                    );
                  }}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: product.title });
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}
export default Post;
