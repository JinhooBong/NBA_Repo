import React from "react";
import { useState, useEffect } from "react";
const axios = require("axios");

const PlayerName = ({ team, player, id }) => {
  return (
    <div>
      <h1>
        {team} : {player} #{id}
      </h1>
    </div>
  );
};

export default PlayerName;
