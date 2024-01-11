import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
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

function App() {
  return (
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
  );
}

export default App;
