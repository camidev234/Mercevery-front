import { useFormik } from "formik";
import { LoginInterface } from "../../types/validations/validations";
import { SendButton } from "../SendButtton";
import { toast } from "sonner";
import { useContext, useState } from "react";
import axios from "axios";
import { loginUser } from "../../services/authService";
import { AppContext } from "../../context/AppContext";

export const LoginForm: React.FC = () => {
  const [hasErrors, setHasErrors] = useState<boolean>(true);
  const { onAuthUser } = useContext(AppContext);
  const formik = useFormik<LoginInterface>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (values.email?.length === 0 || values.password?.length === 0) {
        toast.warning("Tienes campos sin completar");
      } else {
        try {
          setHasErrors(false);
          const credentials: LoginInterface = {
            email: values.email,
            password: values.password,
          };
          const response = await loginUser(credentials);
          if (response.status === 200) {
            toast.success("Inicio de sesion realizado con exito.");
          }
          onAuthUser(response.data?.access_token, response.data?.user?.role?.id);
        } catch (error) {
          setHasErrors(true);
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
              toast.warning("Este usuario no existe");
            } else if (error.response?.status === 401) {
              toast.info("Verifica tus credenciales");
            } else {
              toast.info(
                "Ha ocurrido un error interno del servidor" +
                  error.response?.status
              );
            }
          } else {
            toast.warning("Error interno del servidor");
          }
        }
      }
    },
  });

  return (
    <section className="w-full h-full">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-2"
      >
        <article className="w-full">
          <label htmlFor="">Email</label>
        </article>
        <article>
          <input
            type="text"
            placeholder="alguienexample@gmail.com"
            name="email"
            onChange={formik.handleChange}
            className="w-full h-9 rounded-md border border-zinc-300 pl-2"
          />
        </article>
        <article>
          <label htmlFor="">Contraseña</label>
        </article>
        <article>
          <input
            type="password"
            placeholder="your password here"
            onChange={formik.handleChange}
            name="password"
            className="w-full h-9 rounded-md border border-zinc-300 pl-2"
          />
        </article>
        <article className="w-full flex justify-center items-center mt-4">
          <SendButton
            textToShow="Iniciar sesion"
            textWhenIsClicked="Iniciando sesion..."
            hasErrors={hasErrors}
          />
        </article>
      </form>
    </section>
  );
};
