import { RegisterForm } from "../components/auth/RegisterForm"

export const RegisterPage :React.FC = () => {
    return (
        <section className="w-full flex justify-center items-center p-10 flex-col">
            <section className="p-8 text-3xl font-bold text-blue-950">
                <h1>Formulario de registro</h1>
            </section>
            <RegisterForm/>
        </section>
    )
}