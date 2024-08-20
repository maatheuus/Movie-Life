import { Router } from "express";

import {
  postFavorites,
  getFavoriteStatus,
  getFavorites,
} from "../controllers/favController.js";

export const router = Router();

router.post("/favorite", postFavorites);
router.delete("/favorite", postFavorites);
router.get("/favorite-status", getFavoriteStatus);
router.get("/favoriteMedia", getFavorites);
