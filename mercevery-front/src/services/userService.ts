import axios from "axios";
import { ClientDataInterface, CompanyDataInterface } from "../types/initialValues";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const saveUser = async (userData: CompanyDataInterface | ClientDataInterface) => {
  try {
    const url: string = `${apiUrl}/users/save_user`;
    const response = await axios.post(url, userData);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw error;
      }
    }
    throw new Error("Internal server error");
  }
};
