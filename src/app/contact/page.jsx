"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Contact = () => {
  const route = useRouter();
  return (
    <div>
      <h1 className="text-3xl">Contact Us</h1>
      <p className="mt-4">
        If you have any questions, feel free to reach out to us!
      </p>
      <div className="">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => route.push("/contact/address")}
        >
          View Address
        </button>
      </div>
    </div>
  );
};

export default Contact;
