const express = require("express");
const routes = require("./routes");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => handle(req, res));
    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
