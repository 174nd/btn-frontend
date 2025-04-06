import React from "react";
import { Navbar } from "./navbar";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-slate-200">
      <Navbar />
      <main className="w-full max-w-[1440px]">{children}</main>
    </div>
  );
};
