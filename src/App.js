import Login from "./initial_page/login_build/Login";
import CreateChannel from "./initial_page/registration_build/CreateChannel";
import Home from "./initial_page/home_build/Home";
import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./features/Navbar/navigation_build";
import { DarkModeContext } from "./context/modeContext";
import Profile from "./initial_page/account_build/Profile";
import { useContext } from "react";

import { AuthContext } from "./context/authContext";
import PublicChats from "./features/publicchats/chat_1";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <CreateChannel />,
    },
    {
      path: "/newsfeed",
      element: <PublicChats />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
