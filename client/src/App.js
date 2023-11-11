import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import Sale from "./pages/Sale";
import Thankyou from "./pages/Thankyou";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
