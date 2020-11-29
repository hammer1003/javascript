import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import redis from "redis";
import {
  APP_PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  IN_PROD,
  REDIS_HOST,
  REDIS_PASSWORD,
  REDIS_PORT,
  SESS_LIFETIME,
  SESS_NAME,
  SESS_SECRET
} from "./config";
import schemaDirectives from "./directives";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

(async () => {
  try {
    await mongoose.connect(
      `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    const app = express();

    app.disable("x-powered-by");

    const RedisStore = connectRedis(session);
    const client = redis.createClient(
      16179,
      "redis-16179.c1.asia-northeast1-1.gce.cloud.redislabs.com",
      { auth_pass: "G1ki4QxSeDRMqTClvKLsgP762Yw009dU" }
    );

    const store = new RedisStore({
      client,
      host: REDIS_HOST,
      port: REDIS_PORT,
      pass: REDIS_PASSWORD
    });

    app.use(
      session({
        store,
        name: SESS_NAME,
        secret: SESS_SECRET,
        resave: true, //resave session to store
        rolling: true, // update cookie to response
        saveUninitialized: false,
        cookie: {
          maxAge: parseInt(SESS_LIFETIME),
          sameSite: true,
          secure: IN_PROD
        }
      })
    );

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      schemaDirectives,
      // cors: false,
      playground: IN_PROD
        ? false
        : {
            settings: {
              "request.credentials": "include"
            }
          },
      context: ({ req, res }) => ({ req, res })
    });

    // cors works for whole server : curl -v -H 'Origin: http://example.com' localhost:3000/graphql
    server.applyMiddleware({ app, cors: false });

    app.listen({ port: APP_PORT }, () =>
      console.log(
        `🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`
      )
    );
  } catch (e) {
    console.error(e);
  }
})();
