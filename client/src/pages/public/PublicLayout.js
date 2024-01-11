import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../components";
const PublicLayout = () => {
  return (
    <div className="flex min-h-screen h-full">
      <Sidebar />
      {/* <div className="w-[270px]"></div>
      <div className="w-[50px]"></div> */}
      <main className="bg-gray-300 w-full">
        <Header />
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PublicLayout;
