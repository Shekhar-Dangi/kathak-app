import "./App.css";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Overview from "./components/Overview";
import Taals from "./components/Taals";
import Practical from "./components/Practical";
import Exam from "./components/Exam";
import Auth from "./components/Auth";
import Theory from "./components/Theory";
import Slider from "./components/Slider";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { auth, db } from "./firebase";

import { collection, doc, query } from "firebase/firestore";

function App() {
  const [user, loading] = useAuthState(auth);
  const [info, loading2] = useDocument(
    user && query(doc(db, user.email, "info"))
  );

  return (
    <Router>
      <TopNavbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/overview" element={<Overview />} />
        <Route exact path="/taals" element={<Taals />} />
        <Route exact path="/practical" element={<Practical />} />
        <Route exact path="/exam-prep" element={<Exam />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/theory" element={<Theory />} />
        <Route exact path="/slider" element={<Slider />} />
        <Route
          exact
          path="/util"
          element={
            user ? (
              info?.data()?.role === "Student" ? (
                <Student />
              ) : (
                <Teacher />
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
