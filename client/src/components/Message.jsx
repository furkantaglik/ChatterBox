export default function Message({ message, img, msWho }) {
  return (
    <div className={`flex items-center mb-2  ${msWho && "justify-end"}`}>
      {!msWho && (
        <img src={img} alt="" className="w-[30px] h-[30px] rounded-full" />
      )}
      <div
        className={`flex flex-wrap items-center   ${
          msWho ? "bg-teal-500" : "bg-purple-700"
        } w-fit max-w-screen-xs rounded-md p-1 bg-opacity-30  overflow-hidden`}
      >
        <p className=" break-all">{message}</p>
      </div>
    </div>
  );
}
