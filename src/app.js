import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { rootRouter } from "./routes/root.routes.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3001;
const app = express();
app.use(cors());

// Routes
app.use(process.env.API_V1, rootRouter);

//Wildcard route for non existent routes
app.use("*", (req, res) => {
  res.status(404).json({ status: "Failed", message: "Endpoint not found" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(process.cwd() + "/.env");
});
