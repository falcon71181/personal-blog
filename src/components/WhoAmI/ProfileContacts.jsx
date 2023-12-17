import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/utils/config";

const ProfileContacts = ({ className }) => {
  return (
    <ul className={className}>
      {socialMedia.map((item) => (
        <li key={item.name}>
          <Link
            className="group flex rounded-lg items-center p-2 m-2 bg-cover cursor-pointer hover:bg-gray-900"
            href={item.url}
            target="_blank"
          >
            <Image
              className="border-2 rounded-full p-[1px] z-[2] group-hover:border-grny"
              src={item.img}
              alt={item.name}
              width={30}
              height={30}
            />
            <div className="pl-2 font-heading group-hover:text-saffron">
              {item.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileContacts;

