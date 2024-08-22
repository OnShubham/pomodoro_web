import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Error from "@/components/page/error";
import Pomodoro from "@/components/page/pomodoro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/pomodoro",
    element: <Pomodoro />,
  },
]);

export default router;
