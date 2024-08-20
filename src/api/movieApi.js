import axios from "axios";

export async function fetchTrendingData() {
  try {
    const res = await axios.get("/trending/all/week");

    if (res.status !== 200) throw new Error("Error with the request");

    return res.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchConfig() {
  try {
    const res = await axios.get("/configuration");

    if (res.status !== 200) throw new Error("Error with the request");

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}

const URL = import.meta.env.VITE_URL_FAVORITES;

export async function addFavorite(data) {
  try {
    const res = await axios.post(`${URL}/favorite`, data);

    if (res.status !== 200) throw new Error("Error while add to the favorite");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeFavorite({ userId, mediaId }) {
  const res = await axios.delete(`${URL}/favorite`, {
    data: { userId, mediaId },
  });
  return res.data;
}

export async function getFavStatus(data) {
  try {
    const res = await axios.get(`${URL}/favorite-status`, {
      params: data,
    });

    if (res.status !== 200) throw new Error("Error while add to the favorite");

    return res.data || [];
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getFavMedia(data) {
  try {
    const res = await axios.get(`${URL}/favoriteMedia`, {
      params: data,
    });
    if (res.status !== 200) throw new Error("Error while render the favorite");
    return res.data || [];
  } catch (error) {
    throw new Error(error.message);
  }
}
