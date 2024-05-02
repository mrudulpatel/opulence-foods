import React from "react";
import SectionTitle from "./SectionTitle";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <section className="text-center my-8" id="contact">
      <SectionTitle subTitle="Get In Touch" title="Contact Us" />
      <div className="mt-8 flex items-center justify-center">
        <a
          href="mailto:info@opulencefoods.co.in"
          className="text-lg lg:text-4xl text-center flex items-center"
        >
          <EnvelopeIcon className="h-10 w-10" />
          &nbsp;
          <span className="underline">info@opulencefoods.co.in</span>
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
