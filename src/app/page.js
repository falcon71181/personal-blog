"use client";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "../../public/pp.png";

export default function Page() {
  return (
    <>
      <div className="pt-24 min-h-[88vh] flex flex-col justify-center items-center">
        <div className="w-[60rem] flex">
          <Image
            className="w-52 h-52 rounded-full"
            src={ProfilePic}
            alt="Profile Pic"
          />
          <div className="space-y-3 leading-8 text-[#ededef] text-lg ml-4">
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
        <div class="w-[25vw] px-5 mt-10 flex justify-between items-center gap-20">
          <a
            href="/"
            class="flex px-5 items-center justify-center gap-2 rounded-2xl bg-cyan-200 p-2 font-semibold text-black text-lg hover:bg-cyan-500"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
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
