import { MdModeEdit } from "react-icons/md";

export const UpdateUserBtn: React.FC = () => {
  return (
    <button className="w-[45%] h-full bg-blue-950 hover:bg-zinc-950 p-1 rounded-lg text-white flex gap-2 justify-center items-center">
      Actualizar usuario <MdModeEdit/>
    </button>
  );
};
