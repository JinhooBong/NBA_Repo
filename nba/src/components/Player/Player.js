import React from 'react';
import PlayerName from './PlayerName';
import { useState, useEffect } from 'react';
import './player.css';

const axios = require('axios');

const Player = () => {

  // this state will manage the data input from data.json
  const [teamAndPlayer, setTeamAndPlayer] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
  
    axios('data.json', {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    })
    .then((response) => {
      // response.data.Team_Players returns an array of objects
      let data = response.data.Team_Players;

      setTeamAndPlayer(data);
    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  return (
    console.log(teamAndPlayer),
    <div className='player_box'>
      {teamAndPlayer.map((info) => {
        console.log('team', info.Team);
        console.log('player', info.Player);
        return <PlayerName team={info.Team} player={info.Player} />
      })}
    </div>
  )

}

export default Player;