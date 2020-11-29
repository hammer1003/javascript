export const {
  APP_PORT = 4000,
  NODE_ENV = "development",

  DB_USERNAME = "hammer",
  DB_PASSWORD = "vv120820",
  DB_HOST = "ds259348.mlab.com",
  DB_PORT = "59348",
  DB_NAME = "mern",

  SESS_NAME = "sid",
  SESS_SECRET = "ssh!secret!",
  SESS_LIFETIME = 1000 * 60 * 60 * 2,

  REDIS_HOST = "redis-16179.c1.asia-northeast1-1.gce.cloud.redislabs.com",
  REDIS_PORT = 16179,
  REDIS_PASSWORD = "G1ki4QxSeDRMqTClvKLsgP762Yw009dU"
} = process.env;

export const IN_PROD = NODE_ENV === "production";
