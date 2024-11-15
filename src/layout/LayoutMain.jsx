import { Navbar, Sidebar, Loading } from "../components";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const LayoutMain = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Sidebar />
    </>
  );
};

export default LayoutMain;
