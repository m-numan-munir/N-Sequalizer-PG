import { user } from "../models/user.js";

export const userSignup = async (req, res, next) => {
  let body = req.body;
  if (!["1", "2"].includes(body.userType)) {
    return res.status(400).json({ message: "Invalid userType" });
  }

  let newUser = await user.create({
    userType: body.userType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
  });

  return res.status(201).json({ newUser });
};
