import axios from "axios";

export async function fetchTrendingData() {
  try {
    const res = await axios.get("/trending/all/week");

    if (res.status !== 200) throw new Error("Error with the request");
    console.log("res", res);

    return res.data;
  } catch (error) {
    console.log("error", error);
  }
}
