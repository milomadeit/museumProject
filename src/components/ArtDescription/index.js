import "./ArtDescription.css";
import { Link, useParams } from "react-router-dom";

function ArtDescription({ gallery }) {
  const { galleryId, artId } = useParams();
  const art = gallery.objects.find((art) => art.id === parseInt(artId));

  console.log(art);
  return (
    <div>
      <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
      <a href={art.url}>{art.title}</a>
      {art.images.map((art) => (
        <img key={art.id} src={art.baseimageurl} alt={art.id} />
      ))}
    </div>
  );
}

export default ArtDescription;
