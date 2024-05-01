"use client";
import Link from "next/link";
// import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/products", label: "Our Products" },
  ];
  const pathname = usePathname();
  return (
    <nav className="w-full shadow-sm bg-lightOrange text-black/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center outline-none" href="/">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="ml-4">Opulence Foods</span>
          </Link>
          <nav className="hidden mr-4 md:flex gap-4">
            {links.map(({ href, label }: { href: string; label: string }) => (
              <NavLink key={label} href={href} hidden={href === pathname}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button size="sm" variant="secondary">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

function NavLink({
  href,
  children,
  hidden = false,
}: {
  href: string;
  children: React.ReactNode;
  hidden: boolean;
}) {
  return (
    <Link
      href={href}
      hidden={hidden}
      className="font-medium text-sm transition-colors hover:underline"
    >
      {children}
    </Link>
  );
}

export default NavBar;
