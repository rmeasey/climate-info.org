import { RouterProvider } from 'react-router-dom';
import routes from "./routes/Router";
import { DarkModeProvider } from "@rbnd/react-dark-mode"
import { useTheme } from "./hooks/useTheme";
import './App.css';

// Toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routing = routes()
  const theme = useTheme()
  // To convert the template theme name to the toast theme name
  const themeName = theme.replace('-mode', '')

  return (
    <div className={theme}>
      <DarkModeProvider>
          <main>
            <RouterProvider router={routing} />
            <ToastContainer
              className="main-toast-container"
              position="top-right"
              theme={themeName}
              autoClose={4000}
            />
          </main>
        </DarkModeProvider>
    </div>
  );
}

export default App;
