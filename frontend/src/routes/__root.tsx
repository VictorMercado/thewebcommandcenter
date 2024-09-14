import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { BookOpen, House, Settings } from "lucide-react";

const Nav = () => {
  return (
    <div className="p-4 flex border-t-2 border-red-400/50 w-full items-center justify-center">
      <Link
        to="/"
        className="[&.active]:outline [&.active]:text-red-400/70 outline-red-400/50 flex p-2 justify-center"
      >
        <House />
      </Link>{" "}
      <Link
        to="/about"
        className="[&.active]:outline [&.active]:text-red-400/70 outline-red-400/50 flex p-2 justify-center"
      >
        <BookOpen />
      </Link>
      <Link
        to="/settings"
        className="[&.active]:outline [&.active]:text-red-400/70 outline-red-400/50 flex p-2 justify-center"
      >
        <Settings />
      </Link>
      <Link
        to="/pokemon"
        className="[&.active]:outline [&.active]:text-red-400/70 outline-red-400/50 flex p-2 justify-center"
      >
        Pokemon
      </Link>
    </div>
  );
};

export const Route = createRootRoute({
  component: () => {
    return (
      <main className="p-4 flex flex-col w-[100vw] h-[100vh] justify-center items-center">
        <div className="flex-1 flex w-full h-full items-center justify-center">
          <div className="w-16 h-full border-r-2 border-red-400/50 hidden lg:block"></div>
          <div className="flex-1 h-full">
            <Outlet />
          </div>
          <div className="w-16 h-full border-l-2 border-red-400/50 hidden lg:block"></div>
        </div>
        <Nav />
        <TanStackRouterDevtools />
      </main>
    );
  },
});




