import {
  ClipboardList,
  CodeXml,
  House,
  Menu,
  SquarePlus,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const AsideNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-full w-full flex-col border-r-0 border-gray-600 bg-gray-500 text-white md:border-r-3">
      {/* ================= LOGO ================= */}
      <div className="flex items-center justify-between gap-2 border-b-3 border-gray-500/50 px-4 py-4">
        <div className="flex items-center">
          <div className="mr-2 rounded-xl bg-blue-500 p-3">
            <CodeXml />
          </div>

          <div className="flex flex-col">
            <h1 className="text-[23px] font-bold">Interview Tracker</h1>

            <div className="flex gap-7 text-sm font-bold text-gray-300">
              <span>Practice</span>
              <span>Improve</span>
              <span>Grow</span>
            </div>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 hover:bg-red-600 md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= NAVIGATION ================= */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute left-0 top-full z-50 w-full flex-col gap-3 bg-gray-500 p-3 md:static md:flex md:w-auto md:p-4`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold md:justify-start md:gap-4 md:px-5 md:text-xl ${
              isActive ? "bg-blue-500" : ""
            }`
          }
        >
          <House />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/add-question"
          className={({ isActive }) =>
            `flex shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold md:justify-start md:gap-4 md:px-5 md:text-xl ${
              isActive ? "bg-blue-500" : ""
            }`
          }
        >
          <SquarePlus />
          <span>Add Question</span>
        </NavLink>

        <NavLink
          to="/all-questions"
          className={({ isActive }) =>
            `flex shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold md:justify-start md:gap-4 md:px-5 md:text-xl ${
              isActive ? "bg-blue-500" : ""
            }`
          }
        >
          <ClipboardList />
          <span>All Questions</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AsideNavbar;
