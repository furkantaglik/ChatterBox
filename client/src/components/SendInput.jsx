import { IoIosSend } from "react-icons/io";

export default function SendInput() {
  return (
    <section className="relative justify-center items-center w-full md:w-8/12 mx-auto mb-2">
      <input
        className="p-2 w-full rounded-md bg-teal-600 text-white bg-opacity-30 outline-none focus:shadow-lg shadow-teal-500"
        type="text"
        placeholder="Mesaj Gönder.."
      />
      <IoIosSend className="absolute top-2 right-2 text-2xl text-white" />
    </section>
  );
}
