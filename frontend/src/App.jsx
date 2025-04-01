import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CategoryPage from "./components/Home/CategoryPage";
import PromptCreator from "./components/PromptCreator/PromptCreator";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/prompt-creator/:categoryId/:serviceId" element={<PromptCreator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
