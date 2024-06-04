const express = require('express');
const sequelize = require('./config/database');
const Restaurant = require('./models/Restaurant');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/restaurants', async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

sequelize.sync({ force: true }).then(async () => {
  // Add sample data
  await Restaurant.bulkCreate([
    {
      img: "../assets/images/res-photo-3.png",
      name: "Ulaanbaatar: Silk Road restaurant",
      openingTime: "09AM",
      closingTime: "11PM",
      rating: 4.84,
      reviews: 97,
    },
    {
      img: "../assets/images/res-photo-3.png",
      name: "Ulaanbaatar: Gate 4 restaurant",
      openingTime: "09AM",
      closingTime: "11PM",
      rating: 3.2,
      reviews: 23,
    },
    {
      img: "../assets/images/res-photo-3.png",
      name: "Ulaanbaatar: Veranda restaurant",
      openingTime: "09AM",
      closingTime: "11PM",
      rating: 4.1,
      reviews: 142,
    },
    {
      img: "../assets/images/res-photo-3.png",
      name: "Ulaanbaatar: Cafe 78",
      openingTime: "09AM",
      closingTime: "11PM",
      rating: 2.32,
      reviews: 78,
    },
    {
      img: "../assets/images/res-photo-3.png",
      name: "Ulaanbaatar: Arig Anya restaurant",
      status: "09AM",
      closingTime: "11PM",
      rating: 4.9,
      reviews: 59,
    },
  
  ]);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
