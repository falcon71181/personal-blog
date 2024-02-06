"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dropdown, Space } from "antd";
import { IoMenu } from "react-icons/io5";

const items = [
  {
    label: <a href="/">Home</a>,
    key: "0",
  },
  {
    label: <a href="/blog">Blog</a>,
    key: "1",
  },
  {
    label: <a href="/contact">Contact</a>,
    key: "2",
  },
  {
    label: <a href="/whoami">WhoAmI</a>,
    key: "3",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    // Need to make FALCON hide for Phone Size (Responsive)
    <div className="fixed w-full h-10 flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-md px-5 navHide:px-10 py-6 z-10 laptop:px-20">
      {/* Logo */}
      <Link href="/">
        <div className="font-bold uppercase text-2xl text-saffron">
          <sub>_</sub>&#8457;<sub>.</sub>&#514;<sub>.</sub>l<sub>.</sub>&#8450;
          <sub>.</sub>o<sub>.</sub>&#8501;<sub>_</sub>
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="h-full hidden navHide:flex items-center gap-5 lapto:gap-7">
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
          <Link
            href="/contact"
            className={getNavLinkClasses(pathname, "/contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/whoami"
            className={getNavLinkClasses(pathname, "/whoami")}
          >
            WhoAmI
          </Link>
        </li>
      </ul>

      <menu className="navHide:hidden h-full flex justify-center items-center gap-2">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="h-full flex items-center">
              <IoMenu style={{ color: "white", fontSize: "30px" }} />
            </Space>
          </a>
        </Dropdown>
      </menu>
    </div>
  );
};

// Helper function to determine NavLink classes
const getNavLinkClasses = (currentPath, targetPath) =>
  `${
    currentPath === targetPath
      ? "text-grny"
      : "text-stone-300 hover:text-saffron"
  }`;

export default Navbar;
