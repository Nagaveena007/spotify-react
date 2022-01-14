import { Row, Col, Button } from "react-bootstrap";
import { useState, useEffect, Link } from "react";
import { useParams } from "react-router-dom";

import SingleAlbum from "./SingleAlbum";
const Album = (props) => {
  const [album, setAlbum] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchAlbum(params.id);
    /**fetchAlbum(params.id).then((res) => setAlbum(res)); */
  }, []);
  const fetchAlbum = async (id) => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`
    );
    let album = await response.json();
    setAlbum(album);
    /* return album; */
  };
  return (
    <div className="album__wrap">
      <div className="album__info">
        <img src={album.cover_medium} />
        <h2>{album.title}</h2>
        <Link to={"/artist/" + album?.artist?.id}>
          <h3>{album?.artist?.name}</h3>
        </Link>
        <Button text={"play"} />
        <span>
          {album?.release_date?.slice(0, 4)} ∙ {album?.tracks?.data.length}{" "}
          SONGS
        </span>
      </div>
      <div className="album__tracks">
        {album?.tracks?.data.map((track) => (
          <SingleAlbum
            getSong={() =>
              props.passSong({ ...track, cover: album.cover_medium })
            }
            title={track.title}
            artist={track.artist.name}
            duration={track.duration / 60}
            key={track.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Album;
