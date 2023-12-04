"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed w-full h-10 flex justify-between items-center px-2 laptop:px-20">
      {/* Logo */}
      <Link href="/">
        <div className="font-bold uppercase text-2xl text-saffron">
          <sub>_</sub>&#8457;<sub>.</sub>&#514;<sub>.</sub>l<sub>.</sub>&#8450;
          <sub>.</sub>o<sub>.</sub>&#8501;<sub>_</sub>
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-7">
        <li>
          <Link href="/" className={getNavLinkClasses(pathname, "/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className={getNavLinkClasses(pathname, "/blog")}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className={getNavLinkClasses(pathname, "/contact")}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/whoami" className={getNavLinkClasses(pathname, "/whoami")}>
            WhoAmI
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Helper function to determine NavLink classes
const getNavLinkClasses = (currentPath, targetPath) =>
  `${currentPath === targetPath ? "text-grny" : "text-stone-300"} hover:text-saffron`;

export default Navbar;
