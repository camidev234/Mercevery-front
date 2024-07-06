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

function App() {
  const { isAuth } = useContext(AppContext);

  return (
    <>
      <div className={
        isAuth ? ('App flex') : ('App')
      }>
        {
          isAuth ? (
            <BarNavAuth/>
          ) : (
            <BarNav/>
          )
        }
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Toaster richColors expand={true} closeButton position="top-right" />
      </div>
    </>
  );
}

export default App;
