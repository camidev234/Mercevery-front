import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <section className="login w-full h-[85.7vh] flex justify-center items-center bg-zinc-100">
      <section className="content flex justify-center items-center rounded-xl w-[610px] h-[250px]">
        <section className="text w-[50%] flex flex-col justify-center gap-2 headerColor rounded-s-2xl h-full p-7 text-white">
          <article className="title text-2xl">¿Eres cliente nuevo?</article>
          <span>
            Al crear una cuenta podras publicar tus productos o adquirirlos
          </span>
          <span className="mt-2 bg-white w-[50%] flex justify-center items-center text-black rounded-3xl p-1 hover:bg-black hover:text-white shadow-md">
            <Link to={""} className="w-full h-full flex justify-center items-center">Registrarse</Link>
          </span>
        </section>
        <section className="w-[50%] h-full p-4 rounded-e-2xl border border-zinc-300">
          <LoginForm />
        </section>
      </section>
    </section>
  );
};
