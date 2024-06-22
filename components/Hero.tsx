import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-center mb-8">
      <div className="py-24">
        <h1 className="text-4xl font-semibold">
          Everything is better with&nbsp;
          <span className="text-primary">OpulenceFoods</span>
        </h1>
        <p className="my-4 text-gray-500 text-lg">
          &#x301D;Snack Your Way to Bliss: Completing Everyday Joys!&#x301E;
        </p>
      </div>
    </section>
  );
};

export default Hero;
