import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import Navigation from "./components/page/navigation";
import Footer from "./components/navbar/footer";
function App() {
  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
      <hr style={{ borderTop: "2px solid #f97316" }} />
      <Footer />
    </>
  );
}

export default App;
