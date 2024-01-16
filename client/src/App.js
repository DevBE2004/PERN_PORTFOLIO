import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Contact,
  Education,
  Home,
  Project,
  PublicLayout,
  TechStack,
  WorkExperince,
} from "./pages/public";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT} element={<About />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.EDUCATION} element={<Education />} />
          <Route path={path.PROJECT} element={<Project />} />
          <Route path={path.WORK_EXPERINCE} element={<WorkExperince />} />
          <Route path={path.TECH_STACK} element={<TechStack />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "dark" ? "dark" : "light"}
      />
    </>
  );
}

export default App;
