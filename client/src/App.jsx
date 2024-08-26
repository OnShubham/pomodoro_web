import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/page/navigation";
import Footer from "./components/navbar/footer";
import Home from "./pages/home";
import Pomodoro from "./components/page/pomodoro";
import Error from "./components/page/error";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />}  />
          <Route path="/" element={<Pomodoro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
