import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";

export default function PeopleList() {
  return (
    <section className=" bg-indigo-950 rounded-md mt-10 p-2 mx-auto w-11/12  md:w-8/12">
      <h1 className="text-center mb-5 flex gap-x-4 justify-center items-center  font-semibold  text-xl text-slate-300">
        <IoIosPeople className="text-4xl " /> Kullanıcılar
      </h1>
      <div className="grid grid-cols-2  xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-10 w-fit mx-auto">
        <div className="grid justify-center items-center text-center border border-gray-500 bg-gradient-to-tr from-violet-800 to-fuchsia-800  w-fit p-2 rounded-lg">
          <img
            className="w-[80px] h-[80px] mx-auto"
            src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
            alt=""
          />

          <h1 className="font-semibold">Furkan Tağlık</h1>
          <Link
            className="w-full bg-fuchsia-900 rounded-md font-bold"
            to={"/a"}
          >
            Sohbet Et
          </Link>
        </div>
        <div className="grid justify-center items-center text-center border border-gray-500 bg-gradient-to-tr from-violet-800 to-fuchsia-800  w-fit p-2 rounded-lg">
          <img
            className="w-[80px] h-[80px] mx-auto"
            src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
            alt=""
          />

          <h1 className="font-semibold">Furkan Tağlık</h1>
          <Link
            className="w-full bg-fuchsia-900 rounded-md font-bold"
            to={"/a"}
          >
            Sohbet Et
          </Link>
        </div>
        <div className="grid justify-center items-center text-center border border-gray-500 bg-gradient-to-tr from-violet-800 to-fuchsia-800  w-fit p-2 rounded-lg">
          <img
            className="w-[80px] h-[80px] mx-auto"
            src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
            alt=""
          />

          <h1 className="font-semibold">Furkan Tağlık</h1>
          <Link
            className="w-full bg-fuchsia-900 rounded-md font-bold"
            to={"/a"}
          >
            Sohbet Et
          </Link>
        </div>
        <div className="grid justify-center items-center text-center border border-gray-500 bg-gradient-to-tr from-violet-800 to-fuchsia-800  w-fit p-2 rounded-lg">
          <img
            className="w-[80px] h-[80px] mx-auto"
            src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
            alt=""
          />

          <h1 className="font-semibold">Furkan Tağlık</h1>
          <Link
            className="w-full bg-fuchsia-900 rounded-md font-bold"
            to={"/a"}
          >
            Sohbet Et
          </Link>
        </div>
      </div>
    </section>
  );
}
