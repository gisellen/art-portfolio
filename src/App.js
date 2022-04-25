import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import About from "./pages/About/About"

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/illust" element={<Gallery />} />
        <Route exact path="/sketches">
        </Route>
        <Route exact path="/about" element={<About />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
