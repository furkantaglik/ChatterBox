import { Outlet } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Navbar />
      <main className="max-w-screen-xl mx-auto md:p-0 px-2">
        <Outlet />
      </main>
      <Footer />
    </ClerkProvider>
  );
}
