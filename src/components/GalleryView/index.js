import "./GalleryView.css";
import { useParams, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

function GalleryView({ galleries }) {
  let { galleryId } = useParams();
  const galleryView = galleries.find(
    (gallery) => gallery.galleryid === parseInt(galleryId, 10)
  );

  return (
    <div>
      <h2>{`${galleryView.name}`}</h2>
      <Route exact path='/galleries/:galleryId'>
        {galleryView.objects.map((art) => (
          <ArtImageTile key={art.id} art={art} />
        ))}
      </Route>
      <Route path='/galleries/:galleryId/art/:artId'>
        <ArtDescription gallery={galleryView} />
      </Route>
    </div>
  );
}

export default GalleryView;
