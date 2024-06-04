const express = require('express');
const app = express();
const port = 3000;

const restaurants = [
  {
    img: "../assets/images/res-photo-3.png",
    name: "Ulaanbaatar: Silk Road restaurant",
    status: "Open",
    closingTime: "11PM",
    rating: "4.84",
    reviews: "97"
  },
  // Add more restaurant objects here
];

app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
