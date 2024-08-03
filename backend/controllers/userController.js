import multer from "multer";
import catchAsync from "../utils/catchAsync.js";
import sharp from "sharp";
import User from "../models/userModel.js";
import { createSendToken } from "./authController.js";

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

export const updateAccount = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, "name", "email");
  if (req.file) filteredBody.photo = req?.file.fileName;

  const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  createSendToken(updateUser, "authenticated", 200, req, res);
});
