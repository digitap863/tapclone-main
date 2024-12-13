import React, { Suspense,lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const Sale = lazy(() => import("./pages/Sale"));
const Thankyou = lazy(() => import("./pages/Thankyou"));
const HubspotTrackingCode = lazy(() => import("./util/HubspotTrackingCode"));
const Privacyandpolicy = lazy(() => import("./pages/Privacyandpolicy"));

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        {/* <Route
            exact
            path="/"
            element={<Sale></Sale>}
          ></Route> */}
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
          <Route
            exact
            path="/services"
            element={<ServicePage></ServicePage>}
          ></Route>
          <Route exact path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route exact path="/team" element={<TeamPage></TeamPage>}></Route>
          <Route
            exact
            path="/contact"
            element={<ContactPage></ContactPage>}
          ></Route>
          <Route
            exact
            path="/projects"
            element={<ProjectPage></ProjectPage>}
          ></Route>
          <Route
            exact
            path="/sales"
            element={<Sale></Sale>}
          ></Route>
           <Route
            exact
            path="/thankyou"
            element={<Thankyou/>}
          ></Route>
          <Route
            exact
            path="/privacyandpolicy"
            element={<Privacyandpolicy/>}
          ></Route>
        </Routes>
        </Suspense> 
      </BrowserRouter>
      <HubspotTrackingCode/>
    </div>
  );
}

export default App;
