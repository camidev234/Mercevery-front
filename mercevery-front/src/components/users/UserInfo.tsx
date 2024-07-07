import React, { useContext } from "react";
import Avatar from "react-avatar";
import { AppContext } from "../../context/AppContext";
import { UpdatePasswordBtn } from "./UpdatePasswordBtn";
import { UpdateUserBtn } from "./UpdateUserBtn";

export const UserInfo: React.FC = () => {
  const { me, role_id } = useContext(AppContext);

  return (
    <section className="w-[61%] bg-zinc-100 rounded-3xl border border-zinc-200">
      <article className="w-full p-2 flex">
        <div className="lg:w-[40%] lg:h-[200px] flex justify-center items-center">
          {role_id == "1" ? (
            <Avatar
              name={me?.additional_information?.company_name}
              size="150"
              round
            />
          ) : null}
        </div>
        <div className="lg:w-[60%] lg:h-[200px] p-3 flex flex-col gap-3 justify-center">
          <h3 className="text-2xl flex gap-2 items-center">
            {role_id == "1" ? me.additional_information.company_name : null}
          </h3>
          <span className="flex gap-2 items-center">
            {role_id == "1" ? "NIT: " + me.additional_information.nit : null}
          </span>
          <span className="flex gap-2 items-center">
            {me.email}
            
          </span>
          <span>
            Tipo de usuario:
            {role_id == "1" ? " Empresa" : null}
          </span>
        </div>
      </article>
      <article className="w-full p-3 flex justify-center items-center gap-5">
        <UpdatePasswordBtn/>
        <UpdateUserBtn/>
      </article>
    </section>
  );
};
