import axios from "axios";
import { BASE_URL } from "../components/shared/constants";
import { IUserCard } from "../components/shared/interfaces";

export const fetchUsers = async (): Promise<IUserCard[]> => {
  const res = await axios.get(BASE_URL);
    return res.data;
};
