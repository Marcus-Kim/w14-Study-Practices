import { Link } from "react-router-dom";
import ArtDescription from "../ArtDescription";

function ArtImageTile({ art, galleryId }) {
  console.log(art)
  return (
    <>
      <Link to={`/galleries/${galleryId}/art/${art.id}`} >
        <img src={art.images[0].baseimageurl} />
      </Link>
      <ArtDescription description={art.images[0].description} />
    </>

  )
}

export default ArtImageTile;
