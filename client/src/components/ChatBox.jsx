import { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { useUser } from "@clerk/clerk-react";
import CurrentUser from "./TargetUser";
import Message from "./Message";
import io from "socket.io-client";

const url = import.meta.env.VITE_BASE_API_URL;

export default function ChatBox({ targetUser }) {
  const { user } = useUser();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [onlineStatus, setOnlineStatus] = useState(false);
  const chatContainerRef = useRef(null);

  // Scroll
  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Socket bağlantısı
  useEffect(() => {
    const socket = io(url);
    setSocket(socket);
    const newUserId = user.id;
    socket.emit("new-user-add", newUserId);

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (!socket) return;

    // Yeni bir kullanıcı ekleyen event
    socket.on("get-users", (users) => {
      const isOnline = users.some((u) => u.userId === targetUser.id);
      setOnlineStatus(isOnline);
    });

    // Mesajları al
    socket.on("recieve-message", (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          ...data,
          msWho: user.id !== data.receiverId,
        },
      ]);
    });

    return () => {
      socket.off("get-users");
      socket.off("recieve-message");
    };
  }, [socket, targetUser.id, user.id]);

  const handleSendMessage = () => {
    const data = {
      receiverId: targetUser.id,
      message: message,
      msWho: user.id,
      image: user.imageUrl,
    };
    socket.emit("send-message", data);
    setMessages((prevMessages) => [...prevMessages, { ...data }]);
  };

  return (
    <section className="rounded-t-lg bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-800 rounded mx-auto h-[600px] w-full md:w-6/12 mt-10 flex flex-col justify-between relative">
      <CurrentUser userData={targetUser} onlineStatus={onlineStatus} />
      <div
        ref={chatContainerRef}
        className="h-screen w-full px-1 overflow-y-auto my-5 text-white font-semibold"
      >
        {messages?.map((msg, index) => (
          <Message
            key={index}
            message={msg.message}
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
              handleSendMessage();
            }
          }}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 w-full mx-auto rounded-md bg-teal-600 text-white bg-opacity-30 outline-none focus:shadow-lg shadow-teal-500"
          type="text"
          placeholder="Mesaj Gönder.."
        />
        <button onClick={handleSendMessage}>
          <IoIosSend className="absolute bottom-2 right-2 text-2xl text-white" />
        </button>
        {onlineStatus && <span>Çevrimiçi</span>}
      </section>
    </section>
  );
}
