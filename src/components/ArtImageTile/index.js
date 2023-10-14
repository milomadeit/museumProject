import { useParams, Link } from "react-router-dom";

import "./ArtImageTile.css";

function ArtImageTile({ art }) {
  const { galleryId } = useParams();

  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0].baseimageurl} alt='art' />
    </Link>
  );
}

export default ArtImageTile;
