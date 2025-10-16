import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Container } from "reactstrap"
import Sidebar from "./Sidebar"

const FullLayout = () => {  

    
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow contrast-bg" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid style={{backgroundColor: "#f2f6ff"}}>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};



export default FullLayout;
