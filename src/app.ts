import express from "express"
import birdRoutes from "./routes/bird"

const app = express()

app.use("/bird",birdRoutes)

export default app