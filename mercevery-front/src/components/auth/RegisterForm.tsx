import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  ClientDataInterface,
  CompanyDataInterface,
} from "../../types/initialValues";
import { SendButton } from "../SendButtton";
import axios from "axios";
import { toast } from "sonner";
import { saveUser } from "../../services/userService";
import { Link, useNavigate } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  const [roleId, setRoleId] = useState<string>("0");
  const [initialValues, setInitialValues] = useState({});
  const [hasErrors, setHasErrors] = useState(true);
  

  const clientData: ClientDataInterface = {
    roleId: 2,
    email: "",
    password: "",
    name: "",
    last_name: "",
    number_document: "",
  };

  const companyData: CompanyDataInterface = {
    roleId: 1,
    email: "",
    password: "",
    company_name: "",
    nit: "",
    phone_number: "",
    principal_activity: "",
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(roleId);
    if (roleId == "2") {
      setInitialValues(clientData);
    } else if (roleId == "1") {
      setInitialValues(companyData);
    }
  }, [roleId]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (roleId !== '1' && roleId !== '2') {
        setHasErrors(true);
        toast.info('Debes seleccionar un tipo de usuario.')
        throw new Error('Error');
      }
      try {
        // console.log(values);
        setHasErrors(false);
        const response = await saveUser(values);
        if (response.status === 201) {
          if(roleId == "1") {
            toast.success("Empresa creada con exito.");
          } else {
            toast.success('Usuario creado con exito')
          }
          navigate('/login');
        }
      } catch (error) {
        setHasErrors(true);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 409) {
            toast.warning("Este usuario ya existe.");
          } else {
            toast.info("Ha ocurrido un error interno del servidor");
          }
        }
      }
    },
  });

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleId(e.target.value);
  };

  return (
    <section className="p-6  w-1/2 ">
      <article className="border-b border-b-gray-300">
        <label htmlFor="roleId" className="block text-gray-700">
          Tipo de usuario
        </label>
        <select
          name="roleId"
          id="roleId"
          onChange={handleRoleChange}
          className="mt-1 block w-full p-2 border mb-7 border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
        >
          <option value="">Seleccione un tipo de usuario</option>
          <option value="2">Cliente</option>
          <option value="1">Empresa</option>
        </select>
      </article>
      <form
        action=""
        className="space-y-4 bg-gray-100 rounded-2xl mt-10 p-7 border border-zinc-300"
        onSubmit={formik.handleSubmit}
      >
        <article>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            placeholder="Tu email"
            className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
          />
        </article>

        <article>
          <label htmlFor="password" className="block text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            onChange={formik.handleChange}
            name="password"
            placeholder="Tu contraseña"
            className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
          />
        </article>
        <section className="data space-y-4">
          {roleId == "1" ? (
            <>
              <article>
                <label htmlFor="company_name" className="block text-gray-700">
                  Razón social de la empresa
                </label>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  name="company_name"
                  placeholder="Mi empresa"
                  className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
                />
              </article>

              <article>
                <label htmlFor="nit" className="block text-gray-700">
                  NIT
                </label>
                <input
                  type="text"
                  onChange={formik.handleChange}
                  name="nit"
                  placeholder="3003130618"
                  className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
                />
              </article>

              <article>
                <label htmlFor="phone_number" className="block text-gray-700">
                  Número de teléfono
                </label>
                <input
                  type="text"
                  name="phone_number"
                  onChange={formik.handleChange}
                  placeholder="Número de teléfono"
                  className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
                />
              </article>

              <article>
                <label
                  htmlFor="principal_activity"
                  className="block text-gray-700"
                >
                  Actividad Principal
                </label>
                <input
                  type="text"
                  name="principal_activity"
                  onChange={formik.handleChange}
                  placeholder="Logística"
                  className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none focus:border-blue-900"
                />
              </article>
            </>
          ) : (
            <>
              {roleId == "2" ? (
                <>
                  <article>
                    <label htmlFor="name" className="block text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      placeholder="Tu nombre"
                      className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
                    />
                  </article>

                  <article>
                    <label htmlFor="last_name" className="block text-gray-700">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      onChange={formik.handleChange}
                      placeholder="Tus apellidos"
                      className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
                    />
                  </article>
                  <article>
                    <label
                      htmlFor="number_document"
                      className="block text-gray-700"
                    >
                      Número de documento
                    </label>
                    <input
                      type="text"
                      name="number_document"
                      onChange={formik.handleChange}
                      placeholder="Número de documento"
                      className="mt-1 block w-full p-2 border border-zinc-200 rounded-md shadow-sm focus:outline-none  focus:border-blue-900"
                    />
                  </article>
                </>
              ) : null}
            </>
          )}
        </section>

        <section className="pt-4">
          <SendButton
            hasErrors={hasErrors}
            textToShow="Registrarse"
            textWhenIsClicked="Registrando usuario.."
          />
        </section>
        <article className="w-full flex justify-center items-center flex-col">
          <span>¿Ya tienes una cuenta?</span>
          <Link to={'/login'} className="text-blue-700">
            Iniciar sesion
          </Link>          
        </article>
      </form>
    </section>
  );
};
