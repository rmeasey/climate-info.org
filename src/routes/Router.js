import { lazy } from "react";
import { Link, Navigate, createBrowserRouter } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/****Views*****/
const Home = lazy(() => import("../views/Home.js"));
const Info = lazy(() => import("../views/Info.js"));
const SolarStatus = lazy(() => import("../components/info/SolarStatus.js"));
const Auroras = lazy(() => import("../components/info/Auroras.js"));
const SolarWind = lazy(() => import("../components/info/SolarWind.js"));
const TotalElectronContent = lazy(() => import("../components/info/TotalElectronContent.js"));
const XRayFlux = lazy(() => import("../components/info/XRayFlux.js"));
const Atmosphere = lazy(() => import("../components/info/Atmosphere.js"));
const RadiationBelts = lazy(() => import("../components/info/RadiationBelts.js"));
const SolarRadiation = lazy(() => import("../components/info/SolarRadiation.js"));
const EarthOceans = lazy(() => import("../components/info/EarthOceans.js"));
const Winds = lazy(() => import("../components/info/Winds.js"));
const Help = lazy(() => import("../views/Help.js"));
const About = lazy(() => import("../views/About.js"));


/*****Routes******/
///https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/#creating-protected-routes TIM TODO

const router = () => createBrowserRouter(
  [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", title: "Home", exact: true, element: <Navigate to="/home" /> },
        { path: "home", title: "Home", exact: true, element: <Home /> },

        { path: "info", title: "Climate Information", exact: true, element: <Info /> },
        { path: "solar-status", title: "Solar Status", exact: true, element: <SolarStatus /> },
        { path: "auroras", title: "Auroras", exact: true, element: <Auroras /> },
        { path: "solar-wind", title: "Solar Wind", exact: true, element: <SolarWind /> },
        { path: "total-electron-content", title: "Total Electron Content", exact: true, element: <TotalElectronContent /> },
        { path: "radiation-belts", title: "Radiation Belts", exact: true, element: <RadiationBelts /> },
        { path: "solar-radiation", title: "Solar Radiation", exact: true, element: <SolarRadiation /> },
        { path: "atmosphere", title: "Atmosphere", exact: true, element: <Atmosphere /> },
        { path: "x-ray-flux", title: "X-Ray Flux", exact: true, element: <XRayFlux /> },
        { path: "earth-oceans", title: "Earth Oceans", exact: true, element: <EarthOceans /> },
        { path: "winds", title: "Winds", exact: true, element: <Winds /> },
        { path: "about", title: "About", exact: true, element: <About /> },
        { path: "help", title: "Help Centre", exact: true, element: <Help /> },        
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ]
);

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here, please move along!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default router;
