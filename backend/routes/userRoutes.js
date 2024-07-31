import { Router } from "express";
import {
  signup,
  login,
  logout,
  protect,
} from "../controllers/authController.js";
import {
  resizeImages,
  updateAccount,
  uploadUserPhoto,
} from "../controllers/userController.js";

export const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Protect all routes after this middleware
router.use(protect);

router.patch("/update", uploadUserPhoto, resizeImages, updateAccount);
