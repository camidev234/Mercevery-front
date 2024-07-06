import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { LuBoxes, LuLogOut } from "react-icons/lu";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import Avatar from "react-avatar";
import { BsFillGearFill } from "react-icons/bs";

export const BarNavAuth = () => {
  const { role_id, me } = useContext(AppContext);
  return (
    <section className="header headerColor w-[28%] h-[100vh] sticky top-0 shadow-lg">
      <header className="header w-full h-full flex-col">
        <div className="container w-full h-[15%] flex justify-center items-center">
          <Link
            to={"/"}
            className="w-full h-full flex justify-center items-center"
          >
            <img src="./img/m.png" className="w-[44%] h-full object-contain" />
          </Link>
        </div>
        <div className="container w-full h-[10%] flex pl-5 items-center gap-2 text-white">
          {role_id == "1" ? (
            <>
              <Avatar name={me.additional_information.company_name} round size="40" />
              <span>{me.additional_information.company_name}</span>
            </>
          ) : null}
        </div>
        {role_id == "1" ? (
          <nav className="navegation w-full h-[65%] text-white">
            <section className="p-5 flex flex-col gap-3">
              <div className="navegation__li">
                <Link to={"/home"} className="flex p-2 items-center gap-2">
                  <FaHome /> Inicio
                </Link>
              </div>
              <div className="navegation__li">
                <Link to={""} className="flex p-2 items-center gap-2">
                  <LuBoxes /> Mis productos
                </Link>
              </div>
              <div className="navegation__li">
                <Link to={""} className="flex p-2 items-center gap-2">
                  <BiSolidPurchaseTag /> Mis ventas
                </Link>
              </div>
              <div className="navegation__li">
                <Link to={""} className="flex p-2 items-center gap-2">
                  <BsFillGearFill /> Configuracion
                </Link>
              </div>
            </section>
          </nav>
        ) : null}
        <div className="container w-full h-[10%] flex items-center pl-5">
          <div className="navegation__li">
            <Link
              to={"/login"}
              className="flex justify-center items-center gap-2 p-2 rounded-lg text-white"
            >
              <LuLogOut /> Cerrar sesion
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
};
