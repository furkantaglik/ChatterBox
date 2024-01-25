import { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { useUser } from "@clerk/clerk-react";
import CurrentUser from "./CurrentUser";
import Message from "./Message";
import io from "socket.io-client";

const url = import.meta.env.VITE_BASE_API_URL;
const socket = io(`${url}`);

export default function ChatBox({ targetUser }) {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const sendPrivateMessage = () => {
    if (message.trim() === "") return;
    socket.emit("message", {
      content: message,
      from: user.id,
      image: user.imageUrl,
      to: targetUser.id,
    });
    setMessage("");
  };
  useEffect(() => {
    socket.on("message", (content, to, from, image) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: content, image: image, msWho: from === user.id },
      ]);
    });
    return () => {
      socket.off("message");
    };
  }, [targetUser]);

  return (
    <section className=" rounded-t-lg bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-800 rounded mx-auto h-[600px] w-full md:w-6/12 mt-10 flex flex-col justify-between relative">
      <CurrentUser userData={targetUser} />
      <div
        ref={chatContainerRef}
        className="h-screen w-full px-1 overflow-y-auto my-5 text-white font-semibold"
      >
        {messages.map((msg, index) => (
          <Message
            key={index}
            message={msg.content}
            img={msg.image}
            msWho={msg.msWho}
          />
        ))}
      </div>
      <section className="relative justify-center items-center w-full md:w-8/12 mx-auto mb-2">
        <input
          value={message}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendPrivateMessage();
            }
          }}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 w-full mx-auto rounded-md bg-teal-600 text-white bg-opacity-30 outline-none focus:shadow-lg shadow-teal-500"
          type="text"
          placeholder="Mesaj Gönder.."
        />
        <button onClick={sendPrivateMessage}>
          <IoIosSend className="absolute bottom-2 right-2 text-2xl text-white" />
        </button>
      </section>
    </section>
  );
}
