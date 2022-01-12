import React from 'react';
import PlayerName from './PlayerName';
import { useState, useEffect } from 'react';
import './player.css';

const axios = require('axios');

const Player = () => {

  const [teams, setTeams] = useState('');

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = () => {
    axios({
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/teams/',
      headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '87b8929e7bmshe04f8ebb4c4ca49p1f669ajsn05e262630cb8'
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log('team err', err);
    })
  }
  
  

  return (
    <div className='player_box'>
      <PlayerName />
    </div>
  )

}

export default Player;