import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = (props) => {
  return (
    <img className="album" src={props.src} alt="album cover" key={props.key} />
  );
};

export default AlbumCard;
