import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="pt-24 min-h-[88vh] flex justify-center items-center">
        <img src="./pp.png"></img>
        <span className="text-white text-4xl">
          Ara Ara ... What Should I Post Here .. ?
        </span>
      </div>
    </div>
  );
}
