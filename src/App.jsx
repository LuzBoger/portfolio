import Home from "./views/Home";
import Navigation from "./views/Navigation";
import AboutMe from "./views/AboutMe";
import CurriculumVitae from "./views/CurriculumVitae";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
            </Routes>
        </Router>
    );
}

export default App;
