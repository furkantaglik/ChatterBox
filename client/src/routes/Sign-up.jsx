import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <section className="flex justify-center items-center h-screen ">
      <SignUp signInUrl="/sign-in" />
    </section>
  );
}
