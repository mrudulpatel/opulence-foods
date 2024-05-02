import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 mb-8">
      <div className="py-24">
        <h1 className="text-4xl font-semibold">
          Everything is better with&nbsp;
          <span className="text-primary">OpulenceFoods</span>
        </h1>
        <p className="my-4 text-gray-500 text-lg">
          &#x301D;Snack Your Way to Bliss: Completing Everyday Joys!&#x301E;
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-sm items-center flex gap-2 text-white px-8 py-2 rounded-full">
            Order Now
            <ArrowRightCircleIcon className="h-6 w-6" />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More
            <ArrowRightCircleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="relative size-full">
        <Image
          src={
            "/product1.jpg"
            // "https://github.com/dejwid/food-ordering/blob/master/public/pizza.png?raw=true"
          }
          width={659}
          height={550}
          alt="hero_image"
        />
      </div>
    </section>
  );
};

export default Hero;
