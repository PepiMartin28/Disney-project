import express from "express";

const app = express();

import authRoutes from "./routes/auth.routes.js";

app.use(express.json());

app.use("/auth", authRoutes);

export default app;
