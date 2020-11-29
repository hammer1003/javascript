const auth = require("./auth");
const events = require("./events");
const booking = require("./booking");

const root = {
  ...auth,
  ...events,
  ...booking
};

module.exports = root;
