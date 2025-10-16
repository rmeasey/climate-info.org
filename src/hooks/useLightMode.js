import { useDarkMode } from "@rbnd/react-dark-mode"
const useLightMode = () => {
  // Check if there's a theme in local storage
  const storageKey = "darkMode"; // This should match the storage key used by `use-dark-mode`
  
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(storageKey);
    // If no theme is saved, default to dark mode
    if (savedTheme === null) {
      localStorage.setItem(storageKey, true); // Set dark mode by default
      return true; // Return true for dark mode
    }
    return savedTheme === "true"; // Otherwise return the saved preference
  };

  const darkMode = useDarkMode(getInitialTheme(), { // Initialize with default dark mode
    classNameDark: "dark-mode", // Add dark mode class to body
    classNameLight: "light-mode", // Add light mode class to body
  });

  const theme = darkMode.value ? "dark-mode" : "light-mode";

  return { theme, toggleTheme: darkMode.toggle };
};

export default useLightMode;
