import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { Header, Sidebar, Footer } from "../../components";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "../../context/ThemeContext";

const PublicLayout = () => {
  const { menuLeft } = useSelector((state) => state.menu);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [theme] = useTheme();
  return (
    <div
      className={twMerge(
        clsx("flex min-h-screen h-full", theme === "dark" && "bg-gray-900")
      )}
    >
      <Sidebar />
      <main
        className={twMerge(
          clsx(
            "bg-gray-300 w-full",
            isDesktop ? (menuLeft === true ? "ml-[230px]" : "ml-[50px]") : null
          )
        )}
      >
        <Header isDesktop={isDesktop} />
        <div
          className={twMerge(
            clsx("w-full min-h-screen", theme === "dark" && "bg-gray-900 text-white")
          )}
        >
          <Outlet />
        </div>
        <Footer />
      </main>
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#2196f3",
          borderRadius: "80px",
          display: "flex",
          justifyContent: "center",
          padding: "10px 0 0 0",
          width: "50px",
          height: "50px",
        }}
      />
    </div>
  );
};

export default PublicLayout;
