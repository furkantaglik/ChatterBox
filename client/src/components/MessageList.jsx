import MessageCard from "./MessageCard";
import { IoChatboxEllipses } from "react-icons/io5";

export default function MessageList() {
  return (
    <section className=" bg-indigo-950 rounded-md mt-10 p-2 mx-auto w-11/12  md:w-4/12">
      <h1 className="text-center mb-5 flex justify-center items-center gap-x-5 font-semibold  text-xl text-slate-300">
        <IoChatboxEllipses className="text-4xl" /> Mesajlar
      </h1>
      <div className="flex flex-col gap-y-5 ">
        <MessageCard
          img={
            "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/people-512.png"
          }
          username={"furkantaglik"}
          lastMessage={"Sohbete Başla"}
          notification={3}
        />
      </div>
    </section>
  );
}
