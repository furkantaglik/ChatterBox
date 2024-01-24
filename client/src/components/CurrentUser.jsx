export default function CurrentUser({ userData }) {
  return (
    <div className="flex justify-between items-center bg-indigo-950 rounded-b-md rounded-tl-lg  mx-auto  cursor-pointer w-full md:w-6/12 ">
      <div className="flex items-center gap-x-3">
        <img
          src={userData?.imageUrl}
          alt=""
          className="rounded-full w-[50px] h-[50px]"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-white">
            {userData?.username}
          </h1>
        </div>
      </div>
      <div className="rounded-full bg-indigo-950 px-2 py-1 me-5 font-bold text-white">
        <p className="bg-green-500 p-1 rounded-full"></p>
      </div>
    </div>
  );
}
