import { Schema, model } from "mongoose";

const favoriteSchema = new Schema({
  user: {
    type: {},
    required: [true, "Please, provide the current user!"],
  },
  favorites: [],
});

const Favorites = model("Favorites", favoriteSchema);
export default Favorites;
