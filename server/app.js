const express = require('express');
const https = require('https');
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
const app = express();
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;
app.get('/user/:username', (req, res) => {
  console.log(req.params);
  if (req.params.username) {
    https.get(`https://bio.torre.co/api/bios/${req.params.username}`, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        // console.log("=>>data", data);
        res.send(JSON.parse(data));
      });

    }).on("error", (err) => {
      res.send("Error: " + err.message);
    });
  }
});
app.get('/cors/:url', (req, res) => {
  console.log(req.params);
  if (req.params.url) {
    https.get(`${req.params.url}`, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        // console.log("=>>data", data);
        res.send(JSON.parse(data));
      });

    }).on("error", (err) => {
      res.send("Error: " + err.message);
    });
  }
});
app.get('/', (req, res) => {
  res.send("Welcome to CORS server! 😁")
})
app.listen(PORT, () => console.log(`server running on port ${PORT}`))
// Export the Express API
module.exports = app;