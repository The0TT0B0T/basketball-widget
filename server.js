const PORT = 5500;
const axios = require('axios').default;
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

app.get('/games', async (req, res) => {
  console.log('Request to /games recieved');
    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games',
        params: {date: '2022-02-12'},
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          const games = response.data.response;
          console.log(games);
          const slicedGames = games.slice(0,6);
          res.json(slicedGames);
      } catch (error) {
          console.error(error);
          res.status(500).json({error: 'Server error'});
      
}
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}!`));