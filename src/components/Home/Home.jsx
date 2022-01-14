import { useState } from "react";
import { Carousel, Container, Row, Col, ListGroup } from "react-bootstrap";

const Home = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  popArtists = [
    "arianagrande",
    "maroon5",
    "onerepublic",
    "coldplay",
    "katyperry",
  ];

  hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];
  handleArtist = async (artistName, category) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          }),
        }
      );
      let result = await response.json();
      let songInfo = result.data;
      this.setState({
        [category]: [...this.state[category], songInfo[0]],
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>Home</div>
      <div>Home</div>
    </>
  );
};

export default Home;
