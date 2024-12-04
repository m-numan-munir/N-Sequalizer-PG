import { Router } from "express";
import { userSignup } from "../controllers/auth.controller.js";

export const userRouter = Router();
userRouter.use("/user").post(userSignup);
