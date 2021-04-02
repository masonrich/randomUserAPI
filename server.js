const express = require("express");
const path = require("path");
const app = express();
const { default: Axios } = require("axios");

// This is to serve files from the React app (the client)
app.use(express.static(path.join(__dirname, "client/build")));

/* 
    API to grab the users from randomuser.me
    I am passing in the seeds in order to 
    generate the same sets of data each time
*/
app.get("/api/getList/:seed", async (req, res) => {
  await Axios.get(
    "https://randomuser.me/api/?&results=3500&seed=" + req.params.seed,
    {
      responseType: "json",
    }
  )
    .then((r) => {
      res.send(r.data["results"]);
    })
    .catch((err) => {
      console.log("Error fetching random users\n" + err);
    });
});

// This handles any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);
