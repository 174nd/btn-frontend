import React from "react";
import { Sidebar } from "./sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import clsx from "clsx";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="from-primary-900 via-primary-500 to-primary-400 h-full bg-gradient-to-br">
      <div className="mx-auto flex h-screen w-full max-w-[1440px] flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Area */}

        <div
          className={clsx(
            "mx-2 mb-2 flex min-h-[calc(100vh-17*0.25rem)] w-[calc(100vw-1rem)] flex-1 flex-col rounded-xl bg-slate-200/90 shadow-xl backdrop-blur-lg md:my-2 md:ml-0 md:h-[calc(100vh-2*2*0.25rem)]",
          )}
        >
          {/* Navbar */}
          {/* <Navbar /> */}
          <ScrollArea className={clsx("w-full px-4 py-2")} type="scroll">
            {/* Content */}
            {children}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
