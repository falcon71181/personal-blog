import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
    return(
        <div>
            <ul className="whoami_socials">
        <li>
        <Link
              className="social_btn left-[45px] bg-cover cursor-pointer "
              href="https://github.com/falcon71181"
              target="_blank"
            >
              <Image
                className="socials_img border-2 rounded-full p-[1px] z-[2]"
                src="/socials/Github.png"
                alt="Github"
                width={30}
                height={30}
              />
              <div className="social_name pl-2 font-heading">Github</div>
            </Link>
        </li>
        <li>
        <Link
              className="social_btn left-[45px] bg-cover cursor-pointer "
              href="https://www.instagram.com/falcon71181/"
              target="_blank"
            >
              <Image
                className="socials_img border-2 rounded-full p-[1px] z-[2]"
                src="/socials/Instagram.png"
                alt="Instagram"
                width={30}
                height={30}
              />
              <div className="social_name pl-2 font-heading">Instagram</div>
            </Link>
        </li>
        <li>
        <Link
              className="social_btn left-[45px] bg-cover cursor-pointer "
              href="https://www.linkedin.com/in/abhay-thakur-73470b287/"
              target="_blank"
            >
              <Image
                className="socials_img border-2 rounded-full p-[1px] z-[2]"
                src="/socials/Linkedin.png"
                alt="Linkedin"
                width={30}
                height={30}
              />
              <div className="social_name pl-2 font-heading">Linkedin</div>
            </Link>
        </li>
        <li>
        <Link
              className="social_btn left-[45px] bg-cover cursor-pointer "
              href="mailto:falcon_clutch71@protonmail.com"
              target="_blank"
            >
              <Image
                className="socials_img border-2 rounded-full p-[1px] z-[2]"
                src="/socials/Mail.png"
                alt="Mail"
                width={30}
                height={30}
              />
              <div className="social_name pl-2 font-heading">Mail</div>
            </Link>
        </li>
        <li>
        <Link
              className="social_btn left-[45px] bg-cover cursor-pointer "
              href="https://twitter.com/elonmusk"
              target="_blank"
            >
              <Image
                className="socials_img border-2 rounded-full p-[1px] z-[2]"
                src="/socials/Twitter.png"
                alt="Twitter"
                width={30}
                height={30}
              />
              <div className="social_name pl-2 font-heading">Twitter</div>
            </Link>
        </li>
        <li>
        <Link
              className="social_btn left-[45px] bg-cover cursor-pointer "
              href="https://app.hackthebox.com/profile/673636"
              target="_blank"
            >
              <Image
                className="socials_img border-2 rounded-full p-[1px] z-[2]"
                src="/socials/HTB.png"
                alt="HTB"
                width={30}
                height={30}
              />
              <div className="social_name pl-2 font-heading">HTB</div>
            </Link>
        </li>
        </ul>
        </div>
    );
}

export default Socials;