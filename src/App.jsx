import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/navbar/NavBar";
import Services from "./pages/Services";
import Focal from "./pages/Focal";
import Academy from "./pages/Academy";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/focalx" element={<Focal />} />
          <Route path="academy" element={<Academy />} />
        </Route>

        <Route path="/service/:serviceName/:id" element={<Services />} />
      </Routes>
    </>
  );
}
//protocol://domain/endpoint?key=value
export default App;
