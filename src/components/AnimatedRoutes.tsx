import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "./PageTransition";

const Home = lazy(() => import("../pages/Home"));
const Properties = lazy(() => import("../pages/Properties"));
const Owners = lazy(() => import("../pages/Owners"));
const Tenants = lazy(() => import("../pages/Tenants"));
const Maintenance = lazy(() => import("../pages/Maintenance"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <Home />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/properties"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <Properties />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/owners"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <Owners />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/tenants"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <Tenants />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/maintenance"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <Maintenance />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <About />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <Contact />
              </PageTransition>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="section-pad container-pad">Loading...</div>}>
              <PageTransition>
                <NotFound />
              </PageTransition>
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
