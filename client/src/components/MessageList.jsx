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
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
          }
          username={"furkan Tağlık"}
          lastMessage={"Merhaba"}
          notification={3}
        />
        <MessageCard
          img={
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
          }
          username={"furkan Tağlık"}
          lastMessage={"Merhaba"}
          notification={3}
        />
        <MessageCard
          img={
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ2l0aHViL2ltZ18yYk1TNE1UOTZoZVUyTGlWa25QTndWQ2VYelUifQ?width=80"
          }
          username={"furkan Tağlık"}
          lastMessage={"Merhaba"}
          notification={3}
        />
      </div>
    </section>
  );
}
