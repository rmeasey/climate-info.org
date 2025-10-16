import React from "react";
import { Button } from "reactstrap";
import useLightMode from "../hooks/useLightMode";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useLightMode(); // Use the custom hook

  return (
    <Button
      size="md"
      color={theme === "dark-mode" ? "light" : "dark"}
      className="rounded-circle btn-icon"
      onClick={toggleTheme}
    >
      {theme === "dark-mode" ? <i className="bi bi-moon-stars"></i> : <i className="bi bi-sun"></i>}
    </Button>
  );
};

export default ThemeBtn;
