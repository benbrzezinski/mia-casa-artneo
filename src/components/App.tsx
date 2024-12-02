import { Suspense, lazy } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("../pages/Home"));
const OfferCollaborationModels = lazy(
  () => import("../pages/OfferCollaborationModels")
);
const OfferOrganizedTrips = lazy(() => import("../pages/OfferOrganizedTrips"));
const OfferProseccoHills = lazy(() => import("../pages/OfferProseccoHills"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
              <ScrollToTop />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="oferta/modele-wspolpracy"
            element={<OfferCollaborationModels />}
          />
          <Route
            path="oferta/organizacja-wyjazdow"
            element={<OfferOrganizedTrips />}
          />
          <Route
            path="oferta/prosecco-hills"
            element={<OfferProseccoHills />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
