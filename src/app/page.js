"use client";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "../../public/pp.png";
import { resumeDownloadLink, myIntroduction } from "@/utils/config";

export default function Page() {
  const getHrefBasedOnScreenSize = () => {
    if (window.innerWidth < 768) {
      return resumeDownloadLink[1]; // for mobile phones
    } else {
      return resumeDownloadLink[0]; // for tablet or laptop or desktop
    }
  };

  // Handle click event for the download link
  const handleDownloadClick = () => {
    const href = getHrefBasedOnScreenSize();
    window.open(href, "_blank"); // Navigate to the appropriate route
  };

  return (
    <>
      <div className="pt-24 min-h-[88vh] flex flex-col justify-center items-center">
        <div className="max-w-[60rem] flex flex-col justify-center items-center laptop:flex-row">
          <div className="flex items-center justify-center w-full laptop:w-[30rem] m-5 laptop:mb-0">
            <Image
              className="rounded-full h-[216px] w-[216px] laptop:w-full laptop:h-full"
              src={ProfilePic}
              alt="Profile Pic"
            />
          </div>
          <div className="space-y-3 leading-8 text-[#ededef] text-base navHide:text-lg ml-4 p-5 laptop:px-0">
            {myIntroduction.map((introduction) => (
              <p>{introduction}</p>
            ))}
          </div>
        </div>
        <div className="w-[30rem] px-5 mt-10 flex flex-col navHide:flex-row items-center gap-5 navHide:gap-10 laptop:gap-20">
          <button
            onClick={handleDownloadClick}
            target="_blank"
            className="flex px-5 items-center justify-center gap-2 rounded-2xl bg-cyan-200 p-2 font-semibold text-black text-lg hover:bg-cyan-500"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <Link
            href="/whoami"
            className="text-grny text-xl font-extrabold font-heading hover:underline"
          >
            Who Am I ?
          </Link>
        </div>
      </div>
    </>
  );
}
