import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Nav from "./Nav";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
}
