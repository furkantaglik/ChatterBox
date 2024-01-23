import MessageList from "../components/MessageList";
import PeopleList from "../components/PeopleList";

export default function Home() {
  return (
    <div className="flex sm:flex-row flex-col gap-x-10">
      <MessageList />
      <PeopleList />
    </div>
  );
}
