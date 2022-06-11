import "./App.css";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./components/Overview";
import Taals from "./components/Taals";
import Practical from "./components/Practical";
import Exam from "./components/Exam";
import Auth from "./components/Auth";
import Theory from "./components/Theory";
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <TopNavbar />
      <Auth />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home />
          }
        ></Route>
        <Route exact path="/overview" element={<Overview />} />
        <Route exact path="/taals" element={<Taals />} />
        <Route exact path="/practical" element={<Practical />} />
        <Route exact path="/exam-prep" element={<Exam />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/theory" element={<Theory />} />
        <Route exact path="/slider" element={<Slider />} />
      </Routes>
    </Router>
  );
}

export default App;
