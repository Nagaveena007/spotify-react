import React from "react";
import AlbumCard from "../Album/AlbumCard";
import { useState, useEffect, Link } from "react";
import "../MyNavbar/MyNavbar";
import "./Home.css";
const Home = () => {
  const [queen, setQueen] = useState([]);
  const [eminum, setEminum] = useState([]);

  useEffect(() => {
    fetchMusic("queen").then((res) => setQueen(res));
    fetchMusic("eminum").then((res) => setEminum(res));
  }, []);
  let fetchMusic = async (category) => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${category}`
    );
    let song = await response.json();
    console.log(song.data);
    return song.data;
    /*  setQueen(res);
    setEminum(res); ;*/
  };
  return (
    <>
      <div className="home__wrap">
        <h2>#Trending</h2>
        <div className="home__line">
          {queen &&
            queen
              .slice(0, 6)
              .map((song, i) => (
                <AlbumCard src={song.album.cover_medium} key={i} />
              ))}
        </div>
        <h2>#New releases</h2>
        <div className="home__line">
          {eminum &&
            eminum
              .slice(0, 6)
              .map((song, i) => (
                <AlbumCard src={song.album.cover_medium} key={i} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
