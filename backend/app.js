import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import cors from "cors";
import e from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { router as routerUser } from "./routes/userRoutes.js";
import { router as routerMovie } from "./routes/movieRoutes.js";
const app = e();

// 1. Middlewares
app.use(cors());
if (process.env.NODE_DEV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(e.json({ limit: "100kb" }));
app.use(cookieParser());

app.use("/api/v1/user", routerUser);
app.use("/api/v1/", routerMovie);

export default app;
