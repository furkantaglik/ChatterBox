export default function CurrentUser() {
  return (
    <div className="flex justify-between items-center bg-indigo-950 rounded-b-md rounded-tl-lg  mx-auto  cursor-pointer w-full md:w-6/12 ">
      <div className="flex items-center gap-x-3">
        <img
          src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
          alt=""
          className="rounded-full w-[50px] h-[50px]"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-white">Furkan</h1>
        </div>
      </div>
      <div className="rounded-full bg-indigo-950 px-2 py-1 me-5 font-bold text-white">
        <p className="bg-green-500 p-1 rounded-full"></p>
      </div>
    </div>
  );
}
