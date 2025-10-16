import React from 'react'
import {Navbar, Collapse, Nav, NavbarBrand, Button} from 'reactstrap'

import { useTheme } from '../hooks/useTheme'

import PageTitle from "../components/PageTitle";
import LogoSmall from '../assets/images/logos/climate-info-logo-small.png'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const theme = useTheme();

  return (
    <div className="contrast-bg">
      <Navbar expand="md">
        <div className="d-flex align-items-center">
          <NavbarBrand href="/" className="d-lg-none my-0 mx-2" >
            <div className="text-center">
              <img
                src={LogoSmall}
                alt="climate-info"
                height="28"
                width="28"
                className="me-2"
              ></img>
            </div>
          </NavbarBrand>

          <Button
          color={theme === "dark-mode" ? "dark" : "light"}
          outline
          className="d-lg-none mx-2"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>

        </div>
        <div className="hstack gap-2">
          <Button
            color={theme === "dark-mode" ? "dark" : "light"}
            size="sm"
            outline
            className="d-sm-block d-md-none"
            onClick={Handletoggle}
          >
            {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
          </Button>
        </div>

        <Collapse navbar isOpen={isOpen}>
          <Nav className={theme === "light-mode" ? "me-auto navbar-light" : "me-auto navbar-dark"} navbar>
            <PageTitle></PageTitle>
          </Nav>
          {/* <div style={{width: "250px", marginRight: "1rem"}}><ThemeBtn></ThemeBtn></div> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
