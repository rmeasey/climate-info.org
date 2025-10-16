import useLightMode from "./useLightMode"; // Import your custom useLightMode hook

export const useTheme = () => {
  const { theme } = useLightMode(); // Get the theme directly from useLightMode
  return theme; // Return the theme string directly
};
