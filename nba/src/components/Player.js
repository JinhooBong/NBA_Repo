import React from 'react';
// const axios = require('axios').default;

import axios from 'axios';
const Player = () => {

  // axios.get('https://api-nba-v1.p.rapidapi.com/players/')
    

  // axios({
  //   method: 'GET',
  //   url: 'https://api-nba-v1.p.rapidapi.com/players/',
  //   headers: {
  //     'x-rapidapi-key': '87b8929e7bmshe04f8ebb4c4ca49p1f669ajsn05e262630cb8'
  //   }
  // })
  // .then((response) => {
  //   console.log(response)
  // })
  // .catch((err) => {
  //   console.log('error', err);
  // })

  axios({
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/players/firstName/lebron',
    headers: {
      'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
      'x-rapidapi-key': '87b8929e7bmshe04f8ebb4c4ca49p1f669ajsn05e262630cb8'
    }
  })
    .then((response) => {
      console.log(response.data.api.players);
    })
    .catch((err) => {
      console.log('err', err)
    })

  return (
    <div>
      <h1>Player</h1>
    </div>
  )
}

export default Player;