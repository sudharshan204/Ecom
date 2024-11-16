import express from "express";
import mongoose from "mongoose";
import route from "./routes/menRoute.js";
import routewomen from "./routes/womenRoutes.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/men", route); // Unique route for men
app.use("/api/women", routewomen); // Unique route for women

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// MongoDB connection
mongoose
  .connect("mongodb+srv://sukunandham:sukumar@cluster0.wu686.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));
