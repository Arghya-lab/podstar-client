import { NavLink } from "react-router-dom";
import { Home, Search, UserRound } from "lucide-react";
import { TypographyMuted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

function Navbar({
  className,
  onAction = () => {},
}: {
  className?: string;
  onAction?: () => unknown;
}) {
  return (
    <div className={cn("flex flex-col justify-between", className)}>
      <section className="flex flex-col">
        <nav className="w-64 overflow-y-auto">
          <ul className="flex flex-col gap-2 p-4 ">
            <li>
              <NavLink
                onClick={() => {
                  onAction();
                }}
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }>
                <Home />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  onAction();
                }}
                to="/search"
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }>
                <Search />
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  onAction();
                }}
                to="/you"
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }>
                <UserRound />
                You
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="p-4 pb-6">
        <TypographyMuted className="break-words">
          Podstar: A podcast streaming app for web by Arghya Lab.
        </TypographyMuted>
        <a href="https://github.com/Arghya-lab" target="_blank">
          <TypographyMuted className="break-words pt-2 hover:underline">
            github link
          </TypographyMuted>
        </a>
      </section>
    </div>
  );
}

export default Navbar;
