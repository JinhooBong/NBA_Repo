import React, { useState } from "react";
import axios from "axios";
import PlayerStats from "./PlayerStats";

const Stats = () => {
  const [inputPlayer, setInputPlayer] = useState("");
  const [playerStats, setPlayerStats] = useState([]);

  const getPlayerStats = async (player) => {
    const options = {
      method: "GET",
      url: `https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/${player}`,
      headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "c9bfc37e9fmshf134f4277b71718p11a766jsnc263c0972da5",
      },
    };
    try {
      let response = await axios.request(options);
      let data = response.data.api.statistics;
      setPlayerStats(data);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setInputPlayer(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getPlayerStats(inputPlayer);
    setInputPlayer("");
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={inputPlayer} />
        <button type="submit">Search for player</button>
      </form>
      <PlayerStats playerStats={playerStats} />
    </>
  );
};

export default Stats;
