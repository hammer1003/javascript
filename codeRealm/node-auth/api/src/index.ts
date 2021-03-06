import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import mongoose from "mongoose";
import {
  APP_PORT,
  MONGO_OPTIONS,
  MONGO_URI,
  REDIS_OPTIONS,
  SESSION_OPTIONS
} from "./config";

(async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

  const RedisStore = connectRedis(session);
  const client = new Redis(REDIS_OPTIONS);

  const app = express();

  app.use(session({ ...SESSION_OPTIONS, store: new RedisStore({ client }) }));

  app.get("/", (req, res) => {
    res.json({ message: "works" });
  });

  app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));
})();
