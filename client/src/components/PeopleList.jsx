import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BASE_API_URL;
export default function PeopleList() {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/api/user/userlist`);

        setUserList(response.data);
      } catch (error) {
        console.error("Hata:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className=" bg-indigo-950 rounded-md mt-10 p-2 mx-auto w-11/12  md:w-8/12">
      <h1 className="text-center mb-5 flex gap-x-4 justify-center items-center  font-semibold  text-xl text-slate-300">
        <IoIosPeople className="text-4xl " /> Kullanıcılar
      </h1>
      <div className="grid grid-cols-2  xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-10 w-fit mx-auto">
        {userList?.map((user) => (
          <div
            key={user.username}
            className="grid justify-center items-center text-center border border-gray-500 bg-gradient-to-tr from-violet-800 to-fuchsia-800  w-fit p-2 rounded-lg"
          >
            <img
              className="w-[80px] h-[80px] mx-auto"
              src={user.imageUrl}
              alt={user.username}
            />

            <h1 className="font-semibold">{user.username}</h1>
            <Link
              className="w-full bg-blue-900 rounded-md "
              to={`/chat/${user.username}`}
            >
              Sohbet Et
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
