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
  
    axios('data.json', {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log('err', err);
    })
  }
  
  

  return (
    <div className='player_box'>
      <PlayerName />
    </div>
  )

}

export default Player;