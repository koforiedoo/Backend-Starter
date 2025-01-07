import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const port = config.server.port();
const mongoDBURI = config.mongoDb.uri();

let server: any; // To store the server instance

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoDBURI);
    console.log("✅ Connected to MongoDB");

    // Start the Express server
    server = app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });

    // Graceful shutdown
    process.on("SIGINT", async () => {
      console.log("\n🔄 Shutting down gracefully...");
      if (server) server.close(() => console.log("🚪 Server closed"));
      await mongoose.connection.close();
      console.log("🔒 MongoDB connection closed");
      process.exit(0);
    });
  } catch (error) {
    console.error("❌ Error starting server:", (error as Error).message);
    process.exit(1);
  }
}

export { startServer, server };
