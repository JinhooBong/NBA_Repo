import React from 'react';
import { useState, useEffect } from 'react';
const axios = require('axios');

const PlayerName = ({ team, player }) => {

  return (
    <div>
      <h1>{team} : {player}</h1>
    </div>
  )
}

export default PlayerName;