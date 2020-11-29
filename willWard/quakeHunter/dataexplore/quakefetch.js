const fetch = require("node-fetch");

const url =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(quakeData) {
    console.log("quakeData", quakeData);
  });
