import router from "../routes/Router";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
    const location = useLocation().pathname;
    const routes = router(true);
    let currentRoute = routes.routes[0].children.find(e => e.path === location.substring(1))
    let title = ""

    if(location.includes('/help/')) {        
        title = routes.routes[2].children[0].title
    }
    else if(currentRoute){
        title = routes.routes[0].children.find(e => e.path === location.substring(1)).title
    }
    else {
        title = routes.routes[0].children[0].title
    }
    document.title = 'Climate-Info | ' + title
    return (
        <>
            <h3 style={{marginLeft:"20px"}}>{title}</h3>
            <hr/>
        </>
    )
};

export default PageTitle;