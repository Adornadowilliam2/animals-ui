import "./App.css";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./pages/Landingpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Landingpage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
