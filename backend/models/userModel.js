import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please, enter a username"],
  },
  email: {
    type: String,
    required: [true, "Please, enter a email"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (email) => {
        const regex =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return regex.test(email);
      },
      message: () => `Please, enter a valid email address`,
    },
  },
  password: {
    type: String,
    required: [true, "Please, enter a password!"],
    minLength: 6,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please, confirm your password!"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: () => "The passwords does not match!",
    },
  },
  photo: { type: String, default: "default-user.jpg" },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updateAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangeAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  console.log({ resetToken }, this.passwordResetToken);

  return resetToken;
};

const User = model("User", userSchema);
export default User;
