import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <section className="flex justify-center items-center ">
      <SignIn signUpUrl="/sign-up" />
    </section>
  );
}
