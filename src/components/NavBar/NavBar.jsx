"use client"

import "./NavBar.css";
import Link from "next/link";

const NavBar = () => {
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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/whoami">WhoAmI</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
