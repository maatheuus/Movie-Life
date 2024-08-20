import multer from "multer";
import catchAsync from "../utils/catchAsync.js";
import sharp from "sharp";
import User from "../models/userModel.js";
import Favorites from "../models/favoritesModel.js";
import { createSendToken } from "./authController.js";
import AppError from "../utils/appError.js";

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Not an image! Please upload only images.", false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadUserPhoto = upload.single("photo");

export const resizeImages = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.fileName = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.fileName}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

export const updateAccount = catchAsync(async (req, res) => {
  const filteredBody = filterObj(req.body, "name", "email");
  if (req.file) filteredBody.photo = req?.file.fileName;

  const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  createSendToken(updateUser, "authenticated", 200, req, res);
});

export const deleteAccount = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);
  const secDoc = await Favorites.findOneAndDelete({ userId: req.params.id });

  if (!doc) return next(new AppError("No document found with that ID", 404));
  if (!secDoc) return next();

  res.status(204).json({
    status: "success",
    data: null,
  });
});
