import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

export default function BottomBar() {
  return (
    <div className="fixed z-50 max-w-lg -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-violet-800 ">
      <div className="flex justify-between items-center ">
        <Link
          to={"/users"}
          className="hover:bg-violet-900 h-full w-full px-5 py-3  rounded-s-full font-semibold text-white text-2xl"
        >
          <IoIosPeople />
        </Link>
        <Link
          to={"/"}
          className="hover:bg-violet-900 h-full w-full px-5 py-3  rounded-full font-semibold text-white text-2xl"
        >
          <MdHome />
        </Link>
        <Link
          to={"/messages"}
          className="hover:bg-violet-900 h-full w-full px-5 py-3 rounded-e-full font-semibold text-white text-2xl"
        >
          <IoChatbox />
        </Link>
      </div>
    </div>
  );
}
