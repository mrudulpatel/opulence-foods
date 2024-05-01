import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-lightOrange min-h-[calc(100vh-3.5rem)] flex items-center justify-center text-black/90">
      <div>
        <h1 className="text-5xl font-bold">Opulence Foods</h1>
        <p className="text-2xl text-center">The best food in town</p>
      </div>
      
    </section>
  );
};

export default Hero;
