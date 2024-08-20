import { Router } from "express";
import {
  signup,
  login,
  logout,
  protect,
  forgotPassword,
  resetPassword,
  updatePassword,
} from "../controllers/authController.js";
import {
  resizeImages,
  updateAccount,
  uploadUserPhoto,
  deleteAccount,
} from "../controllers/userController.js";

export const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch("/updateMyPassword", updatePassword);
router.patch("/update", uploadUserPhoto, resizeImages, updateAccount);
router.delete("/delete-account/:id", deleteAccount);
