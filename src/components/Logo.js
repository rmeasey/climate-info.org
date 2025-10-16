import LogoLight from "../assets/images/logos/climate-info-logo-light.png";
import LogoDark from "../assets/images/logos/climate-info-logo-dark.png";
import { useTheme } from "../hooks/useTheme";

const Logo = () => {
  const theme = useTheme();  
  return (
    // <Link to="/">
      <div className="text-center" data-testid="climate-info-logo">
        {theme === "light-mode" ? 
          <img
          src={LogoLight}
          alt="maintel"
          width="90%"
          ></img>
        :
          <img
            src={LogoDark}
            alt="maintel"
            width="90%"
          ></img>
        }
      </div>
    // </Link>
  );
};

export default Logo;
