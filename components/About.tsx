import React from "react";
import SectionTitle from "./SectionTitle";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="text-justify my-16 max-w-2xl mx-auto flex flex-col gap-4"
    >
      <SectionTitle subTitle="" title="About Us" />
      <p className=" text-gray-600 mt-4 text-xl">
        Reach out to us for any queries or suggestions. We are here to help you.
      </p>
      <p className="text-gray-600 mt-4 text-xl">
        <Link href="https://www.instagram.com/opulence_foods?igsh=MTc4bm8zYWYwbXRxZw==">
          <InstagramLogoIcon className="w-10 h-10 inline-block" />
          Instagram
        </Link>
      </p>
      <div className="h-24"></div>
    </section>
  );
};

export default About;
