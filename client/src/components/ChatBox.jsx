import CurrentUser from "./CurrentUser";
import SendInput from "./SendInput";
import Message from "./Message";

export default function ChatBox() {
  return (
    <section className="rounded-t-lg  bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-800 rounded mx-auto h-[600px] w-full md:w-8/12 mt-10 flex flex-col justify-between relative">
      <CurrentUser />
      <div className="h-screen w-full px-1 overflow-y-auto my-5 text-white font-semibold">
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
        <Message message={"baaak baaak eliminen day eliminen"} />
      </div>
      <SendInput />
    </section>
  );
}
