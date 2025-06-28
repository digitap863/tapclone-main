import React, { Suspense,lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const Sale = lazy(() => import("./pages/Sale"));
const Thankyou = lazy(() => import("./pages/Thankyou"));
const HubspotTrackingCode = lazy(() => import("./util/HubspotTrackingCode"));
const Privacyandpolicy = lazy(() => import("./pages/Privacyandpolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const CareerDetailPage = lazy(() => import("./pages/CareerDetailPage"));

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
            path="/careers"
            element={<CareerPage></CareerPage>}
          ></Route>
          <Route
            exact
            path="/careers/:id"
            element={<CareerDetailPage></CareerDetailPage>}
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
          <Route
            exact
            path="/blogs"
            element={<BlogPage></BlogPage>}
          ></Route>
           <Route
            exact
            path="/blogs/:id"
            element={<BlogDetailPage></BlogDetailPage>}
          ></Route>
          <Route
            exact
            path="/gallery"
            element={<GalleryPage></GalleryPage>}
          ></Route>
          <Route
            path="*"
            element={<NotFound/>}
          ></Route>
        </Routes>
        </Suspense> 
      </BrowserRouter>
      <HubspotTrackingCode/>
    </div>
  );
}

export default App;
