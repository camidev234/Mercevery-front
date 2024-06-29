import axios from "axios";
import { LoginInterface } from "../types/validations/validations";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const loginUser = async (credentials: LoginInterface) => {
  try {
    const url: string = `${apiUrl}/users/login`;
    const response = await axios.post(url, credentials);
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
