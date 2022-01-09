import React from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HelpIcon from "@mui/icons-material/Help";
import requests from "../config/Requests";
import axios from "axios";
import { AlignHorizontalRightRounded } from "@mui/icons-material";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "no description";
  }
  console.log(movie);
  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <PlayArrowIcon />
            play
          </button>
          <button className="banner__button">
            <HelpIcon />
            more info
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
