import "./Album.css";
const SingleAlbum = ({ title, artist, duration }) => {
  return (
    <div className="single__wrap">
      <div className="note__icon"></div>
      <div className="title-and-artist">
        <span className="title">{title}</span>
        <span className="artist">{artist}</span>
      </div>
      <div className="duration">{duration}</div>
    </div>
  );
};
export default SingleAlbum;
