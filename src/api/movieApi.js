import axios from "axios";

export async function fetchTrendingData() {
  try {
    const res = await axios.get("/trending/all/week");

    if (res.status !== 200) throw new Error("Error with the request");

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
}

export async function fetchConfig() {
  try {
    const res = await axios.get("/configuration");

    if (res.status !== 200) throw new Error("Error with the request");

    return res;
  } catch (error) {
    console.log("error", error);
  }
}
