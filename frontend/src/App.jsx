import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CategoryPage from "./components/Home/CategoryPage";
import PromptCreator from "./components/PromptCreator/PromptCreator";
import Footer from "./components/Footer/Footer";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Unauthorized from "./components/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./api/authContext";

function AppWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === "/unauthorized"; 

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/prompt-creator/:categoryId/:serviceId"
          element={
            <ProtectedRoute>
              <PromptCreator />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;
