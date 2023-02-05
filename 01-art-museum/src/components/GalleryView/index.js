import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import { Route } from "react-router-dom";

function GalleryView({ galleries }) {
  const { galleryId } = useParams();

  const gallery = galleries.find(gallery => gallery.gallerynumber === galleryId)
  console.log(gallery.objects)
  return (
    <>
      <h1>Hello from GalleryView</h1>
      <h2>{gallery.name}</h2>
      <Route exact path={'/galleries/:galleryId'}>
        {gallery.objects.map(art => {
          return <ArtImageTile art={art} galleryId={galleryId}/>
        })}
      </Route>
    </>

  )
}

export default GalleryView;
