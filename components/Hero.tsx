import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 mb-8">
      <div className="py-24">
        <h1 className="text-4xl font-semibold">
          Everything is better with&nbsp;
          <span className="text-primary">OpulenceFoods</span>
        </h1>
        <p className="my-4 text-gray-500 text-lg">
          &#x301D;Snack Your Way to Bliss: Completing Everyday Joys!&#x301E;
        </p>
      </div>
      <div className="relative size-full hidden lg:block">
        <Image
          src={
            "/multi-super-seed-mix.png"
            // "https://github.com/dejwid/food-ordering/blob/master/public/pizza.png?raw=true"
          }
          width={454}
          height={681}
          alt="hero_image"
        />
      </div>
    </section>
  );
};

export default Hero;
