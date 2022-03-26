import axios from "axios";
import { IUserCard } from "../components/shared/interfaces";
import { BASE_URL } from "../constants";

export const fetchUsers = async (): Promise<IUserCard[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
