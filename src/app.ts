import express from "express";
import cors from "cors";
import birdRoutes from "./routes/bird";
import { Request, Response, NextFunction } from "express";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error
    res.status(err.status || 500).json({
      error: err.message || 'An unexpected error occurred',
    });
  });

// Routes
app.use("/bird", birdRoutes);

export default app;
