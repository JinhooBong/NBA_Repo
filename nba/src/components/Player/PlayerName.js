import React from 'react';
import { useState, useEffect } from 'react';
const axios = require('axios');

const PlayerName = ({ team }) => {

  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    getName();
  }, []);

  const getName = () => {
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
        // the response is an array containing all players with matching request data
        let players = response.data.api.players;
        setPlayerName(players[0].firstName + ' ' + players[0].lastName);
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  // axios({
  //   method: 'GET',
  //   url: 'https://api-nba-v1.p.rapidapi.com/players/firstName/lebron',
  //   headers: {
  //     'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
  //     'x-rapidapi-key': '87b8929e7bmshe04f8ebb4c4ca49p1f669ajsn05e262630cb8'
  //   }
  // })
  //   .then((response) => {
  //     console.log(response.data.api.players);
  //   })
  //   .catch((err) => {
  //     console.log('err', err)
  //   })

  return (
    <div>
      <h1>{playerName}</h1>
    </div>
  )
}

export default PlayerName;