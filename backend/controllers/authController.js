import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import catchAsync from "./../utils/catchAsync.js";
import { promisify } from "util";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createSendToken = (user, role, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expiresIn: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    role,
    data: {
      user,
    },
  });
};

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  console.log("newUser", newUser);

  createSendToken(newUser, "authenticated", 201, req, res);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide both email and password",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  const correctPassword = await user.correctPassword(password, user.password);

  if (!user || !correctPassword) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }

  createSendToken(user, "authenticated", 200, req, res);
});

export const logout = (req, res) => {
  res.cookie("jwt", "logout", {
    expiresIn: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

export const protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jtw) {
    token = req.cookies.jwt;
  }

  if (!token)
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decode.id);

  if (!currentUser)
    return res.status(401).json({
      status: "fail",
      message: "The user belonging to the token does not exist.",
    });

  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});
