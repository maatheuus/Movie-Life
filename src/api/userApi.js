import axios from "axios";

const URL = import.meta.env.VITE_URL;

export async function updateUser(userToken, updateData) {
  try {
    const res = await axios.patchForm(`${URL}/update`, updateData, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (res.status !== 200)
      throw new Error("Could not update the current user, try again later");

    return res?.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateMyPassword(userToken, updateData) {
  try {
    const res = await axios.patch(`${URL}/updateMyPassword`, updateData, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (res.status !== 200)
      throw new Error(
        `Failed to update password: ${res.status} ${res.statusText}`
      );

    return res?.data;
  } catch (error) {
    throw new Error(
      `An error occurred while updating the password: ${error.message}`
    );
  }
}
