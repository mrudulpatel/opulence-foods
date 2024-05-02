"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const mobileLinks = [
    {href: "/", title: "Home"},
    {href: "#popular-products", title: "Popular Products"},
    {href: "/products", title: "All Products"},
    {href: "#about", title: "About"},
    {href: "#contact", title: "Contact"},
  ];

  const isMobile = typeof window !== "undefined" && window.navigator.userAgent.includes("Mobile");
  return (
    <header className="flex items-center justify-between">
      <Link
        className="text-primary flex flex-col font-semibold text-lg lg:text-2xl"
        href="/"
      >
        <Image
          src="/logo.png"
          alt="logo"
          height={isMobile ? 72 : 110}
          width={isMobile ? 127 : 150}
        />
        <span>Opulence Foods</span>
      </Link>

      <nav
        className={`flex items-center gap-8 font-semibold text-gray-500 ${
          isMobile && "hidden"
        }`}
      >
        {mobileLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>
      <nav
        className={`flex items-center gap-4 font-semibold text-gray-500 ${
          isMobile && "hidden"
        }`}
      >
        <Link href="/login">Login</Link>
        <Link
          className="bg-primary px-8 text-white rounded-full py-2"
          href="/register"
        >
          Register
        </Link>
      </nav>

      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary flex flex-col transition-all ease-in-out duration-150 font-semibold text-lg lg:text-2xl"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      )}
      <div
        className={`md:hidden z-10 absolute top-[5rem] right-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3 rounded bg-gray-900">
          {mobileLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
