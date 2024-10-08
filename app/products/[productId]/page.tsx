"use client";
import { products } from "@/constants";
import Image from "next/image";
import React from "react";

const ProductPage = ({ params }: { params: { productId: string } }) => {
 const product = products.find(
  (product) => product.productId === params.productId.replace(/%26/g, '&')
);

  const handleClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=+917774896073&text=Hello, I am interested in your product ${product?.title}.`,
      "_blank"
    );
  };

  if (!product) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 items-center justify-center">
      <div className="flex items-center justify-center p-10 gap-5">
        <Image
          src={product?.images[0]}
          alt={product?.title}
          width={452}
          height={679}
          objectFit="cover"
className="border-2 border-black"
        />
        <Image
          src={product?.images[1]}
          alt={product?.title}
          width={452}
          height={679}
          objectFit="cover"
className="border-2 border-black"
        />
      </div>
      <div className="p-4">
        <h1 className="text-3xl font-bold">{product?.title}</h1>
        <p className="text-md mt-10">{product?.description}</p>
        <button
          onClick={handleClick}
          className="bg-primary hover:bg-ecru transition-colors  shadow-sm px-8 text-white rounded-full py-2 !mt-4"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
