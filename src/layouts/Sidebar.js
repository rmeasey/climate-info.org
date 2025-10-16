import { useState } from 'react'
import {
  Badge,
  Button,
  Nav,
  NavItem,
} from "reactstrap";
import Logo from "../components/Logo";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const about = [
  {
    title: "Help Centre",
    id: "menuHelp",
    href: "/help",
    icon: "bi bi-info-circle",
  },
  {
    title: "About",
    id: "menuAbout",
    href: "/about",
    icon: "bi bi-info-circle",
  }
];

const navigation = [
  {
    title: "Home Page",
    id: "menuHome",
    href: "/home",
    icon: "bi bi-home",
    open: false,
  },
  {
    title: "Solar Status",
    id: "menuSolarStatus",
    href: "/solar-status",
    icon: "bi bi-info-circle",
  },
  {
    title: "Solar Wind",
    id: "menuSolarWind",
    href: "/solar-wind",
    icon: "bi bi-info-circle",
  },
  {
    title: "Solar Radiation",
    id: "menuSolarRadiation",
    href: "/solar-radiation",
    icon: "bi bi-info-circle",
  },
  {
    title: "Total Electron Content",
    id: "menuTotalElectronContent",
    href: "/total-electron-content",
    icon: "bi bi-info-circle",
  },
  {
    title: "Radiation Belts",
    id: "menuRadiationBelts",
    href: "/radiation-belts",
    icon: "bi bi-info-circle",
  },
  {
    title: "Atmosphere",
    id: "menuAtmosphere",
    href: "/atmosphere",
    icon: "bi bi-info-circle",
  },
  {
    title: "X-Ray Flux",
    id: "menuXRayFlux",
    href: "/x-ray-flux",
    icon: "bi bi-info-circle",
  },
  {
    title: "Auroras",
    id: "menuAuroras",
    href: "/auroras",
    icon: "bi bi-info-circle",
  },
  {
    title: "Earth Oceans",
    id: "menuEarthOceans",
    href: "/earth-oceans",
    icon: "bi bi-info-circle",
  },
  {
    title: "Earth Winds",
    id: "menuEarthWinds",
    href: "/winds",
    icon: "bi bi-info-circle",
  },
  {
    title: "About",
    id: "menuOther",
    href: "/about",
    icon: "bi bi-wrench-adjustable-circle",
    subnav: about,
    open: false,
  },
];

const Sidebar = () => {

  
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  let location = useLocation();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const theme = useTheme();

  const getPathName = (inputString) => {
    const startIndex = inputString.indexOf('/');
    if (startIndex === -1) return ''; // First slash not found
    const endIndex = inputString.indexOf('/', startIndex + 1);
    if (endIndex === -1) {
      return inputString.slice(startIndex + 1); // Return substring from startIndex + 1 to end of string
    }
    return inputString.slice(startIndex + 1, endIndex);
  };

  return (
    <div>
      <div className="d-flex align-items-center pl-3">
        <Logo />

        <span className="ms-auto d-lg-none">
          <Button
            className={theme === "light-mode" ? "ms-auto d-lg-none btn-close" : "ms-auto d-lg-none btn-close btn-close-white"}
            size="sm"
            onClick={() => showMobilemenu()}
            color="#ff0000"
          ></Button>
        </span>
      </div>
      <div className="pt-0 mt--2">
        <Nav vertical className={theme === "light-mode" ? "sidebarNav navbar-light" : "sidebarNav navbar-dark"}>
          {navigation.map((navi, index) => (
            <div key={index}>
              <NavItem key={index} className="sidenav-bg">
                <Link
                  onClick={() => toggleDropdown(navi)}
                  to={navi.href}
                  id={navi.id}
                  title={navi.title}
                  className={`
                  ${getPathName(location.pathname) === getPathName(navi.href)
                      ? "nav-link py-3 sidenav-selected"
                      : "nav-link py-3 ".concat(theme === "dark-mode" ? "text-dark" : "text-light")
                    } 
                  ${navi.subnav ? "dropdown-toggle" : ""
                    } 

                    `}
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title} </span>
                </Link>

              </NavItem>
              {
                SubNavigation(navi)
              }
            </div>
          ))}
        </Nav>

      </div>
    </div>
  );
};

function SubNavigation(navi) {
  const imageUrl = `${window.location.origin}/service-icons/`
  let location = useLocation();
  const theme = useTheme();

  if (navi.subnav && navi.open) {
    return (
      navi.subnav.map((subnav, index) => (
        <div className="">
          <NavItem key={index} className="sidenav-bg">
            {subnav.disabled ? (
              <span
                className={
                  location.pathname.includes(subnav.href)
                    ? "nav-link py-3 sidenav-dropdown-selected"
                    : "nav-link py-3 sidebarNav-dropdown ".concat(theme === "dark-mode" ? "text-dark" : "text-light")
                }
                style={{ opacity: '0.5' }}>
                <i className={subnav.icon}></i>
                <span className="ms-3 d-inline-block">{subnav.title}</span>
                {subnav.badge && <Badge color={subnav.badge.color} style={{ float: 'right' }}>{subnav.badge.text}</Badge>}</span>
            ) : (
              <Link
                to={subnav.href}
                id={subnav.id}
                className={
                  location.pathname.includes(subnav.href)
                    ? "nav-link py-3 sidenav-dropdown-selected"
                    : "nav-link py-3 sidebarNav-dropdown ".concat(theme === "dark-mode" ? "text-dark" : "text-light")
                }
                title={subnav.title}
              >
                {subnav.image ? <img src={`${imageUrl}${subnav.image}`} alt={subnav.title} width="30" height="30"/> : <i className={subnav.icon}></i>}
                <span className="ms-3 d-inline-block">{subnav.title}</span>
                {subnav.badge && <Badge color={subnav.badge.color} style={{ float: 'right' }}>{subnav.badge.text}</Badge>}
              </Link>
            )}

          </NavItem>
        </div>
      ))
    )

  }
};

function toggleDropdown(navi) {
  if (navi.subnav) {
    closeAllOtherDropdowns(navi);
    navi.open = !navi.open;
  }
  else {
    closeAllOtherDropdowns(navi);
    navi.open = false;
  }
}

function closeAllOtherDropdowns(nav) {
  navigation.forEach(navi => {
    if (navi !== nav)
      navi.open = false;
  });
}

export default Sidebar;
