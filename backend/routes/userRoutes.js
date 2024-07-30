import { Router } from "express";
import { signup } from "../controllers/authController.js";
import {
  updateAccount,
  uploadUserPhoto,
} from "../controllers/userController.js";

export const router = Router();

router.post("/signup", signup);

router.post("/update", uploadUserPhoto, updateAccount);
