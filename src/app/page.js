"use client";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "../../public/pp.png";
import { resumeDownloadLink } from "@/utils/config";

export default function Page() {
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
            <p>
              👋 Hey, I'm Abhay Thakur, a third-year Computer Science
              Engineering student at Chitkara University, Rajpura, originally
              from the enchanting landscapes of Himachal Pradesh, India.
            </p>
            <p>
              💻 I'm passionate about web development and proudly identify as a
              full-stack developer. Join me on my coding journey as I navigate
              the digital realm, turning ideas into functional and sleek
              websites.
            </p>
            <p>Let's build something amazing together! 🚀🌐</p>
          </div>
        </div>
        <div className="w-[30rem] px-5 mt-10 flex flex-col navHide:flex-row items-center gap-5 navHide:gap-10 laptop:gap-20">
          <a
            href={resumeDownloadLink}
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
          </a>
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
