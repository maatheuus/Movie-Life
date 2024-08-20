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

    console.log(res);
    if (res.data.status !== "success")
      throw new Error("Something went wrong to login, try again later!");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function logout() {
  try {
    return await axios.get(`${URL}/logout`);
  } catch (error) {
    // console.log(error);
    throw new Error(error.message);
  }
}

export async function forgotPassword(email) {
  try {
    const res = await axios.post(`${URL}/forgotPassword`, email);

    if (res.status !== 200)
      throw new Error("Something went wrong while send the reset password");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function resetPassword({ token, updatePassword }) {
  try {
    const res = await axios.patch(
      `${URL}/resetPassword/${token.token}`,
      updatePassword
    );
    if (res.status !== 200)
      throw new Error("Something went wrong while send the reset password");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteAccount({ token, id }) {
  try {
    const res = await axios.delete(`${URL}/delete-account/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status !== 204)
      throw new Error("Something went wrong while delete account");

    return null;
  } catch (error) {
    console.log(error);
  }
}
