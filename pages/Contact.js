import React from "react";

const Contact = () => {
   return (
  <div> 
    <div className="container my-12  mx-auto p-4 shadow-xl w-4/5 sm:w-3/4 md:w-1/2 rounded-lg bg-white">
    <div className="mx-auto text-3xl font-bold text-center ">Contact Me</div>
      <form data-netlify="true" method="POST">
      
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
          ></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div className="text-center">
          <button className="hover:shadow-form rounded-md bg-pink-500 py-3 px-8  text-base hover:bg-pink-600 font-semibold text-white outline-none">
            Send
          </button>
        </div>
      </form>
    </div>
   </div>  
  );
};

export default Contact;
