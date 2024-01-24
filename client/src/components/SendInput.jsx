// import { IoIosSend } from "react-icons/io";
// import { useState } from "react";

// export default function SendInput({ onSendMessage }) {
//   const [message, setMessage] = useState("");
//   const handleSend = () => {
//     if (message.trim() !== "") {
//       // onSendMessage fonksiyonunu çağırarak mesajı gönder
//       onSendMessage(message, "hedef_kullanici_id"); // hedef_kullanici_id'yi değiştirin
//       setMessage(""); // Mesaj gönderildikten sonra giriş alanını temizle
//     }
//   };
//   return (
//     <section className="relative justify-center items-center w-full md:w-8/12 mx-auto mb-2">
//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="p-2 w-full rounded-md bg-teal-600 text-white bg-opacity-30 outline-none focus:shadow-lg shadow-teal-500"
//         type="text"
//         placeholder="Mesaj Gönder.."
//       />
//       <button onClick={handleSend}>
//         <IoIosSend className="absolute top-2 right-2 text-2xl text-white" />
//       </button>
//     </section>
//   );
// }
