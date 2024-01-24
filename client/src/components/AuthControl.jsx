import { useUser } from "@clerk/clerk-react";
import SignInPage from "../routes/Sign-in";
import { useState } from "react";
import SignUpPage from "../routes/Sign-up";

export default function AuthControl({ children }) {
  const { isSignedIn, user, isLoaded } = useUser();
  const [state, setState] = useState(true);

  if (!isLoaded) {
    return null;
  }
  if (isSignedIn) {
    return <div>{children}</div>;
  } else {
    return (
      <section className=" flex flex-col gap-y-2">
        <button
          className="bg-teal-200 hover:bg-teal-400 p-1 font-bold w-fit mx-auto rounded-t-md mt-2 text-black "
          onClick={() => setState(!state)}
        >
          {state ? "Veya Kaydol" : " Veya Giriş Yap"}
        </button>
        {state ? <SignInPage /> : <SignUpPage />}
      </section>
    );
  }
}
