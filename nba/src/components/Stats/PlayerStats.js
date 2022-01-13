import React from "react";

const STATS = {
  points: "points",
  blocks: "blocks",
  assists: "assists",
  rebounds: "totReb",
  steals: "steals",
  gamesPlayed: "",
};
const PlayerStats = ({ playerStats }) => {
  const calcAverage = (array) => {
    STATS.gamesPlayed = array.length;
    return array.reduce((a, b) => a + b, 0) / STATS.gamesPlayed;
  };

  const getStat = (stat) => {
    let array = [];
    for (let i in playerStats) {
      if (playerStats[i]["min"] !== "") {
        if (playerStats[i][stat] !== "") {
          array.push(parseInt(playerStats[i][stat]));
        } else if (playerStats[i][stat] === "") {
          array.push(0);
        }
      }
    }
    return calcAverage(array).toFixed(2);
  };

  return (
    <div>
      <p>Games Played: {STATS.gamesPlayed}</p>
      <p>Points Per Game: {getStat(STATS.points)}</p>
      <p>Blocks Per Game: {getStat(STATS.blocks)}</p>
      <p>Steals Per Game: {getStat(STATS.steals)}</p>
      <p>Assists Per Game: {getStat(STATS.assists)}</p>
      <p>Rebounds Per Game: {getStat(STATS.rebounds)}</p>
    </div>
  );
};

export default PlayerStats;
