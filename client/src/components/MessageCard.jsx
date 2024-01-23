import { Link } from "react-router-dom";

export default function MessageCard({
  img,
  username,
  lastMessage,
  notification,
}) {
  const newusername = username.toLowerCase().replace(/\s/g, "");
  return (
    <Link to={`/chat/${newusername}`}>
      <div className="flex justify-between items-center  bg-blue-900 hover:bg-blue-950 transition-all rounded-s-full w-full cursor-pointer">
        <div className="flex items-center gap-x-3">
          <img src={img} alt="" className="rounded-full w-[50px] h-[50px]" />
          <div className="md:flex md:flex-col">
            <h1 className="text-lg font-semibold text-white">{username}</h1>
            <p className="text-gray-300 font-mono">{lastMessage}</p>
          </div>
        </div>
        {notification && (
          <div className="rounded-full bg-indigo-950 px-2 py-1 me-5 font-bold text-white">
            <p>{notification}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
