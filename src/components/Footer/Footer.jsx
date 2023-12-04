import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-2 border-red-500 flex items-center justify-center bg-black text-stone-300 w-full h-full font-heading">
      <span className="text-white">&copy; 2023</span>
      <div className="text-white mx-2">
        <Link href="https://github.com/falcon71181" target="_blank" rel="noopener noreferrer">
          falcon71181
        </Link>
      </div>
      <span className="text-white">. All rights reserved.</span>
    </div>
  );
};

export default Footer;
