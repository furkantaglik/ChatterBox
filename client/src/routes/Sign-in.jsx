import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <section className="flex justify-center items-center h-screen ">
      <SignIn signUpUrl="/sign-up" />
    </section>
  );
}
