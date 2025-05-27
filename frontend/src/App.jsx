import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Loader from "./components/Loader/Loader";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider, useAuth } from "./api/authContext";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Navbarlogged from "./components/Navbar(logged)/Navbar(logged)";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Unauthorized from "./components/Unauthorized";
import CategoryPage from "./components/Home/CategoryPage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import PromptCreator from "./components/PromptCreator/PromptCreator";

function AppWrapper() {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuth();
  const hideLayout = location.pathname === "/unauthorized";

  if (isLoading) {
    return <Loader />;
  }

  const protectedPaths = ["/", "/admin", "/category", "/prompt-creator"];

  const isProtectedPath = protectedPaths.some(
    (path) =>
      location.pathname === path || location.pathname.startsWith(path + "/"),
  );

  const shouldShowLoggedNavbar = isAuthenticated && isProtectedPath;

  return (
    <>
      {!hideLayout && (shouldShowLoggedNavbar ? <Navbarlogged /> : <Navbar />)}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="ADMIN">
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
