import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center rounded-b-lg bg-violet-800 p-3 max-w-screen-xl mx-auto h-[50px]">
      <div>
        <Link to={"/"} className="text-xl font-extrabold text-purple-300">
          ChatterBox
        </Link>
      </div>
      <div>
        <SignedOut>
          <Link className="font-bold text-white text-2xl " to={"/sign-in"}>
            <CgProfile />
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      </div>
    </header>
  );
}
