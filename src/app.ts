import authRoutes from "./routes/authRoutes";
import express from "express";

const app = express();
app.use(express.json());
app.use("/api/users", authRoutes)

export default app;