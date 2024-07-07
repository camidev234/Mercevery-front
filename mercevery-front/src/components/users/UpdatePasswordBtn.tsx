import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";



export const UpdatePasswordBtn: React.FC = () => {
  return (
    <button className="w-[45%] h-full bg-blue-950 hover:bg-zinc-950 p-1 rounded-lg text-white flex gap-2 justify-center items-center">
      Actualizar contraseña <RiLockPasswordFill/>
    </button>
  );
};
