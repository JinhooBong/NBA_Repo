import React, { useState } from "react";
import axios from "axios";
import PlayerStats from "./PlayerStats";

const Stats = () => {
  const [inputPlayer, setInputPlayer] = useState("");
  const [playerStats, setPlayerStats] = useState([]);

  const getPlayerStats = async (player) => {
    try {
      let response = await axios.get("./sampledata.json");
      let data = response.data;
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
        <button type="submit">Player Search Bitch</button>
      </form>
      <PlayerStats playerStats={playerStats} />
    </>
  );
};

export default Stats;
