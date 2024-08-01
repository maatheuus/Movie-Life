import axios from "axios";

const URL = import.meta.env.VITE_URL;

export async function signup(data) {
  try {
    const res = await axios.post(`${URL}/signup`, data, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.data.status !== "success")
      throw new Error("Something wnt wrong to Sing up, try again later!");

    return res.data;
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
    throw new Error(error.message);
  }
}

export async function login(data) {
  try {
    const res = await axios.post(`${URL}/login`, data, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.data.status !== "success")
      throw new Error("Something went wrong to login, try again later!");

    return res.data;
  } catch (error) {}
}
export async function logout() {
  try {
    return await axios.get(`${URL}/logout`);
  } catch (error) {
    // console.log(error);
    throw new Error(error.message);
  }
}
