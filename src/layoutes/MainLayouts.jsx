import { Outlet } from "react-router";
import AsideNavbar from "../components/AsideNavbar";

const MainLayouts = () => {
  return (
    <div id="main-layout">
      {/* Sidebar */}
      <aside id="navbar">
        <AsideNavbar />
      </aside>

      {/* Page Content */}
      <main id="content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayouts;
