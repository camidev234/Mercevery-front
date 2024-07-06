import { Route, Routes } from "react-router-dom";
// import "./App.css";
import { IndexPage } from "./pages/IndexPage";
import { LoginPage } from "./pages/LoginPage";
import { Toaster } from "sonner";
import { RegisterPage } from "./pages/RegisterPage";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { BarNavAuth } from "./components/layout/BarNavAuth";
import { BarNav } from "./components/layout/BarNav";
import { GuestRoute } from "./components/GuestRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { IndexUser } from "./pages/IndexUser";

function App() {
  const { isAuth } = useContext(AppContext);

  return (
    <>
      <div className={isAuth ? "App flex" : "App"}>
        {isAuth ? <BarNavAuth /> : <BarNav />}
        <Routes>
          <Route
            path="/"
            element={
              <GuestRoute>
                <IndexPage />
              </GuestRoute>
            }
          />
          <Route
            path="/login"
            element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <RegisterPage />
              </GuestRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <IndexUser />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Toaster richColors expand={true} closeButton position="top-right" />
      </div>
    </>
  );
}

export default App;
