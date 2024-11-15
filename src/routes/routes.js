import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutMain from "../layout/LayoutMain";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Donate = lazy(() => import("../pages/donate/Donate"));
const Help = lazy(() => import("../pages/help/Help"));
const Mission = lazy(() => import("../pages/mission/OurMission"));
const Error = lazy(() => import("../pages/error/Error"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/how-can-you-help" element={<Help />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
