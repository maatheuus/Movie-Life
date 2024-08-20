import { Schema, model } from "mongoose";

// const favoriteSchema = new Schema({
//   user: {
//     type: {},
//     required: [true, "Please, provide the current user!"],
//   },
//   favMovie: [],
//   totalFavMovies: Number,
// });

const favoriteSchema = new Schema({
  userId: { type: String, required: true },
  mediaId: { type: String, required: true },
  mediaType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Favorites = model("Favorite", favoriteSchema);
export default Favorites;
