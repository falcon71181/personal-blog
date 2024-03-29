import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-8 w-full flex items-center justify-center bg-black text-stone-300 h-16 font-heading">
      <span className="text-white">&copy; 2024</span>
      <div className="text-white mx-2">
        <Link
          href="https://github.com/falcon71181"
          target="_blank"
          rel="noopener noreferrer"
        >
          falcon71181
        </Link>
      </div>
      <span className="text-white hidden footerHide:flex">
        . All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
