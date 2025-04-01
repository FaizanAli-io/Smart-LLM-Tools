import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CategoryPage from "./components/Home/CategoryPage";
import PromptCreator from "./components/PromptCreator/PromptCreator";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* Added Login Route */}
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/prompt-creator/:categoryId/:serviceId" element={<PromptCreator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
