import Image from "next/image"
import React from "react";
import Product from "../models/Product";
import mongoose from "mongoose";
import Link from "next/link";
const Hoodies = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(products).map((item) => {
              return (
                <Link key={products[item]._id} href={`/product/${products[item].slug}`}>
                  <div className="lg:w-1/4 w-1/2 p-4  shadow-md border-slate-400  cursor-pointer">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        src={products[item].img}
                        alt="ecommerce"
                        className="object-cover object-center  h-full m-auto z-0"
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Hoodie
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">$ {products[item].price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category: 'hoodie'})
    let hoodies={}
    for(let item of products){
        if (item.title in hoodies) {
            if(!hoodies[item.title].color.includes(item.color) && item.availableQty > 0){
                hoodies[item.title].color.push(item.color)
            }
            if(!hoodies[item.title].size.includes(item.size) && item.availableQty > 0){
                hoodies[item.title].size.push(item.size)
            }
        }
        else{
            hoodies[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty > 0){
                hoodies[item.title].color = [item.color]
                hoodies[item.title].size = [item.size]
            }
        }
    }
  return {
    props: { products: JSON.parse(JSON.stringify(hoodies)) },
  };
}

export default Hoodies;

