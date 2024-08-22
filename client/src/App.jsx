import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import Navigation from "./components/page/navigation";
function App() {
  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
