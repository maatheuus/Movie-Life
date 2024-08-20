import User from "../models/userModel.js";
import Favorite from "../models/favoritesModel.js";
import AppError from "../utils/appError.js";

export const setFavoritesMovies = async (req, res, next) => {
  try {
    console.log(req.body);
    const { favMovie, totalFavMovies } = req.body;
    const { email } = req.body.user;
    const user = await User.findOne({ email });

    if (!user) {
      return next(new AppError("User not found", 404));
    }
    const { id, name } = user;

    const data = await Favorite.find({
      "user.email": email,
    });

    if (data.length !== 0) {
      await Favorite.findOneAndUpdate(
        { "user.email": email },
        { favMovie, totalFavMovies }
      );
    } else {
      await Favorite.create({
        user: { id, name, email },
        favMovie,
        totalFavMovies,
      });
    }

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    return next(new AppError("Something wen wrong while save the movie"));
  }
};

export const postFavorites = async (req, res) => {
  const { userId, mediaId, mediaType } = req.body;

  try {
    const existingFavorite = await Favorite.findOne({ userId, mediaId });

    if (existingFavorite) {
      const result = await removeFavorite(userId, mediaId);
      res.json(result);
    } else {
      const newFavorite = new Favorite({ userId, mediaId, mediaType });
      await newFavorite.save();

      res.json({ message: "Adicionado aos favoritos" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao processar o pedido" });
  }
};

const removeFavorite = async (userId, mediaId) => {
  try {
    await Favorite.deleteOne({ userId, mediaId });
    return { message: "Removido dos favoritos" };
  } catch (error) {
    console.error("Erro ao remover favorito:", error);
    throw error;
  }
};

export const getFavoriteStatus = async (req, res) => {
  const { userId, mediaId } = req.query;

  try {
    const favorite = await Favorite.findOne({ userId, mediaId });

    res.json({ isFavorite: !!favorite });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar status de favorito" });
  }
};

export const getFavorites = async (req, res) => {
  const { userId } = req.query;

  try {
    const mediaArray = await Favorite.find({ userId });
    res.json(mediaArray);
  } catch (error) {
    console.error(error);
  }
};
