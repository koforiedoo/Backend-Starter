import "dotenv/config";

function getEnv(name: string, fallback: string = ""): string {
  const value = process.env[name];
  if (value === undefined && fallback === null) {
    throw new Error(`Environment Variable ${name} is undefined`);
  }
  return value || fallback;
}

const config = {
  app: {
    name: () => getEnv("APP_NAME", "MyApp"),
    env: () => getEnv("NODE_ENV", "development"),
  },
  server: {
    port: () => parseInt(getEnv("PORT", "4000"), 10),
  },
  auth: {
    secret: () => getEnv("AUTH_SECRET", "default_secret"),
  },
  mongoDb: {
    uri: () => getEnv("MONGO_URI", ""),
  },
};

export default config;
