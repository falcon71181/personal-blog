"use client"

import "./NavBar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="nav_bar">
      <Link href="/">
        <div id="name" className="nav_item">
          <sub>_</sub>&#8457;<sub>.</sub>&#514;<sub>.</sub>l<sub>.</sub>&#8450;
          <sub>.</sub>o<sub>.</sub>&#8501;<sub>_</sub>
        </div>
      </Link>
      <ul className="nav_end nav_item">
        <li>
          <Link className={`${pathname === '/' ? 'text-grny' : 'text-stone-300'}`} href="/">Home</Link>
        </li>
        <li>
          <Link className={`${pathname === '/blog' ? 'text-grny' : 'text-stone-300'}`} href="/blog">Blog</Link>
        </li>
        <li>
          <Link className={`${pathname === '/contact' ? 'text-grny' : 'text-stone-300'}`} href="/contact">Contact</Link>
        </li>
        <li>
          <Link className={`${pathname === '/whoami' ? 'text-grny' : 'text-stone-300'}`} href="/whoami">WhoAmI</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
