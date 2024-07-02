import { Link, Route, Routes } from "react-router-dom";
// import "./App.css";
import { IndexPage } from "./pages/IndexPage";
import { BsSearch } from "react-icons/bs";
import { LoginPage } from "./pages/LoginPage";
import { Toaster } from "sonner";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <>
      <section className="header headerColor w-full h-[91px]">
        <header className="header w-full h-full flex">
          <div className="container w-[22%] h-full flex justify-center items-center">
            <Link
              to={"/"}
              className="w-full h-full flex justify-center items-center"
            >
              <img src="./img/m.png" className="w-[44%] h-full" />
            </Link>
          </div>

          <div className="search w-[30%] flex justify-center items-center gap-2">
            <input
              type="search"
              placeholder="Ingrese una busqueda"
              className="search__input w-[85%] bg-transparent border-b-[2px] border-b-transparent text-white outline-none focus:border-b-[2px] focus:border-b-white"
            />
            <button>
              <BsSearch className="text-white" />
            </button>
          </div>
          <nav className="navegation w-[45%] h-full flex justify-end items-end">
            <ul className="navegation__ul flex w-[88%] h-full justify-evenly items-center text-white">
              <li className="navegation__li">
                <Link to={''}>Inicio</Link>
              </li>
              <li className="navegation__li">
                <Link to={''}>
                  Sobre nosotros
                </Link>
              </li>
              <li className="navegation__li">
                <a href="contatc.html" target="_blank">
                  Contacto
                </a>
              </li>
              <li className="navegation__li">
                <Link to={'/login'} >
                Iniciar Sesion
                </Link>
              </li>
              <li className="navegation__li">
                <Link to={'/register'}>
                Registrarse
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
      <div className="App flex">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>

      </div>
      <Toaster richColors expand={true} closeButton position="top-right" />
    </>
  );
}

export default App;
