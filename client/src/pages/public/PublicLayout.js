import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Sidebar, Footer, MenuRight } from "../../components";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "../../context/ThemeContext";
import Modal from "../../components/common/Modal";

const PublicLayout = () => {
  const location = useLocation();
  const { menuLeft, isShowModal, modalChildrent } = useSelector(
    (state) => state.menu
  );
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [theme] = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div
      className={twMerge(
        clsx(
          "flex min-h-screen h-full relative",
          theme === "dark" && "bg-gray-900"
        )
      )}
    >
      {isShowModal && (
        <div
          className={twMerge(
            clsx(
              "w-full h-full fixed z-50 bg-gray-300 overflow-y-hidden",
              theme === "dark" && "bg-gray-800"
            )
          )}
        >
          <Modal children={modalChildrent} />
        </div>
      )}
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
            clsx(
              "w-full min-h-screen",
              theme === "dark" && "bg-gray-900 text-white"
            )
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
