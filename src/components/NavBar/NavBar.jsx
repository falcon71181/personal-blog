"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  
  const pathname = usePathname();

  return (
    <div className="fixed w-full flex justify-between items-center px-3 py-6">
      <Link href="/">
        <div className="font-bold uppercase text-2xl text-saffron">
          <sub>_</sub>&#8457;<sub>.</sub>&#514;<sub>.</sub>l<sub>.</sub>&#8450;
          <sub>.</sub>o<sub>.</sub>&#8501;<sub>_</sub>
        </div>
      </Link>

      <ul className="flex items-center gap-7">
        <li>
          <Link
            href="/"
            className={`${pathname === "/" ? "text-grny" : "text-stone-300"} 
                            hover:text-saffron`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`${
              pathname === "/blog" ? "text-grny" : "text-stone-300"
            } 
                            hover:text-saffron`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? "text-grny" : "text-stone-300"
            } 
                            hover:text-saffron`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/whoami"
            className={`${
              pathname === "/whoami" ? "text-grny" : "text-stone-300"
            } 
                            hover:text-saffron`}
          >
            WhoAmI
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
