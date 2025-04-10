import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { RiSidebarFoldLine, RiSidebarUnfoldLine } from "react-icons/ri";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";
import clsx from "clsx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  const queryClient = useQueryClient();

  const { data: isSidebarOpen } = useQuery<boolean>({
    queryKey: ["sidebarState"],
    queryFn: () => Promise.resolve(false),
  });

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    queryClient.setQueryData(["sidebarState"], !isSidebarOpen);
    !isSidebarOpen ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
  };

  const menuItems = [
    { label: "Dashboard", icon: <FiHome />, path: "/" },
    { label: "Settings", icon: <FiSettings />, path: "/settings" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
    { label: "Profile", icon: <FiUser />, path: "/profile" },
  ];

  return (
    <aside className={clsx("sticky z-10 flex h-screen w-full flex-col md:static", !isSidebarOpen ? "h-7 md:w-56" : "md:w-16")}>
      {/* Header */}
      <div className={clsx("m-4 flex h-7 items-center justify-between")}>
        <div className="flex items-center justify-center gap-2">
          <img src="/logo.png" alt="Logo" onClick={toggleSidebar} className={clsx("h-8 w-8", !isSidebarOpen && "ml-[2px]")} />

          <h2
            className={clsx(
              "cursor-pointer text-sm font-extrabold text-white transition-colors duration-200 hover:text-gray-200",
              isSidebarOpen && "md:hidden",
            )}
          >
            BAKTI TANI
            <br />
            NUSANTARA
          </h2>
        </div>
        {isSidebarOpen ? (
          <RiSidebarUnfoldLine
            className={clsx("mouse-pointer text-xl text-gray-100 transition-colors duration-200 hover:text-gray-300 md:hidden")}
            onClick={toggleSidebar}
          />
        ) : (
          <RiSidebarFoldLine
            className={clsx("mouse-pointer text-xl text-gray-100 transition-colors duration-200 hover:text-gray-300")}
            onClick={toggleSidebar}
          />
        )}
      </div>

      <ScrollArea className={clsx("mt-2 flex-1 overflow-y-auto px-2 md:block", !isSidebarOpen && "hidden")} type="scroll">
        <nav className="h-full">
          {/* <nav> */}
          <ul className="my-2 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="flex h-8 w-full items-center">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <Link
                        to={item.path}
                        className={clsx(
                          "hover:border-primary-100 flex w-full items-center rounded-xl border-2 border-transparent py-2 pl-3 text-sm font-bold text-gray-200 transition hover:bg-white hover:text-black hover:shadow-md",
                        )}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className={clsx("ml-[7px]", isSidebarOpen && "md:hidden")}>{item.label}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left" className={clsx("hidden bg-white text-black md:block", !isSidebarOpen && "md:hidden")}>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      {/* Card */}
      <Popover>
        <PopoverTrigger>
          <div
            className={clsx(
              "m-2 mt-6 flex cursor-pointer flex-col rounded-xl bg-slate-200 shadow-lg transition-colors duration-300 hover:bg-slate-200 md:block",
              !isSidebarOpen ? "hidden p-2" : "p-2",
            )}
          >
            <div className="flex h-9 w-full flex-row items-center gap-1 overflow-hidden">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className={clsx("flex w-full flex-col", isSidebarOpen && "md:hidden")}>
                <span className="overflow-hidden text-left text-sm font-bold text-ellipsis">Andi Lewis Pratama</span>
                <span className="overflow-hidden text-left text-xs text-ellipsis">andilewispratama11@gmail.com</span>
              </div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className={clsx("flex w-[calc(100vw-2*2*0.25rem)] border-0 bg-white md:w-52", isSidebarOpen && "md:ml-2")}
          side="top"
          sideOffset={-15}
        >
          <Button className="w-full" asChild>
            {/* TODO: Perbaiki */}
            <Link to="/admin">Logout</Link>
          </Button>
        </PopoverContent>
      </Popover>
    </aside>
  );
};
