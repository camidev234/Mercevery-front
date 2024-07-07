import { UserInfo } from "../components/users/UserInfo";

export const IndexUser = () => {
  return (
    <section className="w-full h-[100vh] overflow-auto flex justify-center items-center p-7 flex-col gap-7">
      <h1 className="text-3xl font-bold">Informacion del usuario</h1>
      <UserInfo />
    </section>
  );
};
