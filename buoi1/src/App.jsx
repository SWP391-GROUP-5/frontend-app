import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
//react router dom: render lại code chứ ko re-load lại trang
function App() {
  const router = createBrowserRouter([
    {
      path: "/", //đường dẫn trong url dấu / là đường dẫn mặc định: localhost:5173
      element: <HomePage />, //code show lên giao diện người dùng: element: render ra cái homePage
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
